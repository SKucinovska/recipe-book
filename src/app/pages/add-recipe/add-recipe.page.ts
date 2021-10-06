import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import {PopoverController, Events, NavController} from '@ionic/angular';
import {CameraOrGalleryPage} from '../../popovers/camera-or-gallery/camera-or-gallery.page';
import {StorageService} from '../../services/storage.service';
import {AngularFireAuth} from '@angular/fire/auth';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.page.html',
  styleUrls: ['./add-recipe.page.scss'],
})
export class AddRecipePage implements OnInit {

  constructor(
    private fb: FormBuilder, 
    private popoverCtrl: PopoverController,
    private event2: Events,
    private storageService: StorageService,
    private navCtrl: NavController,
    private afAut: AngularFireAuth) { 
      this.event2.subscribe('imageData', data =>{
        this.img = data
      })
    }

  addRecipeForm: FormGroup
  /*Error messages for form validation */
  error_message = {
    recipeName: [
      {type:'required', message:'The name is required'},
      {type:'minlength', message:'The length of the name is too short'},
      {type:'maxlength', message:'The length of the name is too long'}
    ],

    category: [
      {type:'required', message:'Please choose category'}
    ],

    preparationTime:[
      {type: 'required', message:'Please enter preparation time'}
    ]
  }
  categories: string[]=["Drinks", "Desserts", "Salads", "Soups", "Pasta", "Seafood", "Pork", "Chicken", "Beef", "Lamb"]

  img: any

  ngOnInit() {
    this.addRecipeForm = this.fb.group({
      recipeName: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(25)]],
      category: ['', Validators.required],
      preparationTime: ['', Validators.required],
      ingredients: this.fb.array([this.fb.group({
        amount: ['', Validators.required],
        unit:[''],
        name:['', Validators.required]
      })]),
      
      steps: this.fb.array([this.fb.control('', Validators.required)])
    })
  }

  get ingredients(){
    return this.addRecipeForm.get('ingredients') as FormArray
  }

  addIngredient(){
    this.ingredients.push(this.fb.group({
      amount: ['', Validators.required],
      unit: [''],
      name: ['', Validators.required]
    }))
  }

    get steps(){
      return this.addRecipeForm.get("steps") as FormArray
    }
  
    addStepControl(){
      this.steps.push(this.fb.control('', Validators.required))
      console.log(this.steps)
    }

   addImage(){
     this.popoverCtrl.create({component: CameraOrGalleryPage}).then((popoverElement)=>
     popoverElement.present())
   }

   submitForm(){
     if(!this.img){
       this.img = null;
     }
    let recipe = {
      recipeName: this.addRecipeForm.controls.recipeName.value,
      category: this.addRecipeForm.controls.category.value,
      preparationTime: this.addRecipeForm.controls.preparationTime.value,
      ingredients: this.addRecipeForm.controls.ingredients.value,
      steps: this.addRecipeForm.controls.steps.value,
      image: this.img,
      favourite: false
    }
    console.log('submit')
    this.storageService.addRecipe(recipe, this.afAut.auth.currentUser.uid)
    this.navCtrl.navigateRoot('/tabs/home')
   }
  }

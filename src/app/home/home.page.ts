import { Component, OnInit } from '@angular/core';
import {StorageService} from '../services/storage.service';
import {NavController} from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private storageService: StorageService,
    private navCtrl: NavController,    
    private fireAuth: AngularFireAuth,
    ) {
     }

  recipes: any[]
  recipes2: any[]

  ngOnInit() {
    console.log(this.fireAuth.auth.currentUser.uid);
    if (this.fireAuth.auth.currentUser.uid == null) {
      console.log("Not authenticated");
    } else {      
      this.storageService.getRecipes().subscribe(res =>{
        res = res.filter((item)=>{
          return (item.userId == this.fireAuth.auth.currentUser.uid);
        })
        this.recipes = res
        this.recipes2 = this.recipes
        console.log(this.recipes)
      });
    } 
  }

  filterRecipes(ev: any){
    const val = ev.target.value;
    console.log(val);
    console.log(val.trim());
    if(val && val.trim() != " "){
     this.recipes = this.recipes2.filter((item)=>{
        return (item.category.toLowerCase().indexOf(val.toLowerCase())>-1);
      })
    }
    else{
      this.recipes = this.recipes2
    }
  }

 goToAddRecipe(){
   this.navCtrl.navigateForward('/add-recipe');
 }
}

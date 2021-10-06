import { Component, OnInit, OnChanges } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import {ActivatedRoute} from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.page.html',
  styleUrls: ['./recipe-details.page.scss'],
})

export class RecipeDetailsPage implements OnInit {

  constructor(
    private storageService: StorageService,
    private route: ActivatedRoute,
    private afAuth: AngularFireAuth,
    private navCtrl: NavController
    ) { }

  recipeId: string;
  recipe: any;
  
  ngOnInit() {
    this.recipeId = this.route.snapshot.params['id'];
    if(this.recipeId){
      this.loadRecipe();
    }
  }

  loadRecipe(){
    this.storageService.getRecipe(this.recipeId).subscribe(res =>{
      this.recipe = res
    })
  }

  addToFavourites(){
    this.storageService.markAsFavorite(this.recipeId);
    this.navCtrl.navigateRoot('/tabs/myFavourites');
  }

  removeFromFavourites(){
    this.storageService.unmarkFavorite(this.recipeId);
    this.navCtrl.navigateRoot('/tabs/myFavourites');
  }
}

  
 



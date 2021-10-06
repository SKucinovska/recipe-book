import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { StorageService } from '../../services/storage.service';


@Component({
  selector: 'app-shoppingList',
  templateUrl: 'shoppingList.page.html',
  styleUrls: ['shoppingList.page.scss']
})

export class ShoppingListPage implements OnInit {
  
  recipeId: any;
  recipe: any;
  

  constructor(
    private route: ActivatedRoute,
    private storageService: StorageService) { 
      this.recipeId = this.route.snapshot.params['id'];
      if(this.recipeId){
        this.loadRecipe();
      }
    }

  ngOnInit(): void {
  }

  loadRecipe(){
    this.storageService.getRecipe(this.recipeId).subscribe(res =>{
      this.recipe = res
      console.log(this.recipe);
    })
  }

  removeItem(index: number){
    this.recipe.ingredients.splice(index, 1);
  }


}

import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-myFavourites',
  templateUrl: 'myFavourites.page.html',
  styleUrls: ['myFavourites.page.scss']
})
export class myFavouritesPage {

  constructor(
    private fireAuth: AngularFireAuth,
    private storageService: StorageService) {}

    favourites: any[];
  ngOnInit() {
    console.log(this.fireAuth.auth.currentUser.uid);
    if (this.fireAuth.auth.currentUser.uid == null) {
      console.log("Not authenticated");

    } else {      
      this.storageService.getRecipes().subscribe(res =>{
        res = res.filter((item)=>{
          return (item.userId == this.fireAuth.auth.currentUser.uid && item.favourite == true);
        })
        this.favourites = res
        console.log(this.favourites)
      });
    }
    
  }

}

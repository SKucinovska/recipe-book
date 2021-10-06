import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentReference } from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class StorageService {

  private recipesCollection: AngularFirestoreCollection<any>;
  private recipes: Observable<any[]>;
 
  private usersCollection: AngularFirestoreCollection<any>;
  private users: Observable<any[]>;

  constructor(
    private db: AngularFirestore) {
 
    this.recipesCollection = db.collection<any>('recipesCollection');
    this.recipes = this.recipesCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a=>{
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data}
        })
      })
    )

    this.usersCollection = db.collection<any>('usersCollection');
    this.users = this.usersCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a=>{
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data}
        })
      })
    )
  }

    addRecipe(recipe: any, id: string) {
    recipe.userId = id
    this.recipesCollection.add(recipe)
  }

  getRecipes(){
    return this.recipes;
  }
 
  getRecipe(id){
    return this.recipesCollection.doc(id).valueChanges();
  }

  markAsFavorite(id: string){
    this.db.collection('recipesCollection').doc(id).update({favourite: true});
   }
 
   unmarkFavorite(id: string){
     this.db.collection('recipesCollection').doc(id).update({favourite: false});
   }

  addUser(id: string, email: string, name: string){
    this.usersCollection.doc(id).set({
      userName: name,
      userEmail: email
    })
  }

  updateUser(email: string, id: string){
    this.usersCollection.doc(id).update({
      userEmail: email
    })
  }

}




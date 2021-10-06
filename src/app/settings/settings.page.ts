import { Component, OnInit } from '@angular/core';
import {NavController, AlertController} from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { StorageService } from 'src/app/services/storage.service';
import {auth} from 'firebase/app';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(
    private navCtrl: NavController,
    private fireAuth: AngularFireAuth,
    private storageService: StorageService
  ) { }

  currentEmail
  newEmail
  currentPass

  ngOnInit() {
  }

  navigateToLogin(){
    this.navCtrl.navigateRoot('/login')
  }

 signOut(){
  this.fireAuth.auth.signOut().then(() =>{
    console.log("Signout successful");
    this.navigateToLogin();  
  });
}

updateProfile(){
  this.fireAuth.auth.signInWithEmailAndPassword(this.currentEmail, this.currentPass).then(res => {
    if(res){
      res.user.updateEmail(this.newEmail);
      this.storageService.updateUser(this.newEmail, this.fireAuth.auth.currentUser.uid);
      this.fireAuth.auth.signInWithEmailAndPassword(this.newEmail, this.currentPass);
    }
  })
}
}
   





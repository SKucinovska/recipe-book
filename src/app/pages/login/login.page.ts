import { Component, OnInit } from '@angular/core';
import {NavController, AlertController} from '@ionic/angular';
import {AngularFireAuth} from '@angular/fire/auth';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  constructor(
    private navCtrl: NavController,
    private fireAuth: AngularFireAuth,
    private alertCtrl: AlertController,
    ) { }

  email
  password 

  ngOnInit() {
    console.log("login");
    this.fireAuth.auth.signOut().then(function() {
     console.log("signed out");
    }).catch(function(error) {
      console.log("error");
    });
  }
  
  navigateRegister(){
    this.navCtrl.navigateForward('/register')
  }

  async logIn(){
    const {email, password} = this
      try{
        const res = await this.fireAuth.auth.signInWithEmailAndPassword(email, password)
        if(res != null){
          this.showAlert("Success!", "Welcome abroad!");
          this.navCtrl.navigateRoot('/tabs/home')
        }
   
      }catch(error){
          this.showAlert("Error", error.message)
      }  
  }

  async showAlert(header: string, message: string){
    const alert = await this.alertCtrl.create({
        header,
        message,
        buttons:["Ok"]
    })
    await alert.present()
}
}

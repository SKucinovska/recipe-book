import { Component, OnInit } from '@angular/core';
import {Platform, Events} from '@ionic/angular';
import {Camera, CameraOptions} from '@ionic-native/camera/ngx';
import {PopoverController} from '@ionic/angular';

@Component({
  selector: 'app-camera-or-gallery',
  templateUrl: './camera-or-gallery.page.html',
  styleUrls: ['./camera-or-gallery.page.scss'],
})
export class CameraOrGalleryPage implements OnInit {

  constructor( 
    private camera: Camera, 
    private platform: Platform,
    private event1: Events,
    private popoverCtrl: PopoverController) { }

  ngOnInit() {
  }

  img: any

  openGallery(){
    this.popoverCtrl.dismiss()
    if (this.platform.is('cordova')) {
      const options: CameraOptions = {
        quality: 100,
        targetWidth: 500,
        targetHeight: 200,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        correctOrientation: true,
        sourceType: 0
        };

        this.camera.getPicture(options).then(imageData=>{
          this.img='data:image/jpeg;base64,' + imageData;
          this.event1.publish('imageData', this.img)
        });
  }
  }

  openCamera(){
    this.popoverCtrl.dismiss()
    if (this.platform.is('cordova')) {
      const options: CameraOptions = {
        quality: 100,
        targetWidth: 500,
        targetHeight: 200,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        correctOrientation: true,
        sourceType: 1
        };
  
        this.camera.getPicture(options).then(imageData=>{
          this.img='data:image/jpeg;base64,' + imageData;
          this.event1.publish('imageData', this.img)
        });
  }
  }


}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire'; 
import { environment } from '../environments/environment';
import { AngularFirestoreModule, FirestoreSettingsToken} from '@angular/fire/firestore';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import {Camera} from '@ionic-native/camera/ngx';
import {CameraOrGalleryPageModule} from './popovers/camera-or-gallery/camera-or-gallery.module';
import {AngularFireAuthModule} from  '@angular/fire/auth';
import {AngularFireAuthGuard } from '@angular/fire/auth-guard';

import {StorageService} from './services/storage.service';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    HttpClientModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,  
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    NgbModule.forRoot(),
    CameraOrGalleryPageModule,
    AngularFireAuthModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: FirestoreSettingsToken, useValue: {} },
    Camera,
    AngularFireAuthGuard, 
    StorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

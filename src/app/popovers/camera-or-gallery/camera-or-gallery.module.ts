import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CameraOrGalleryPageRoutingModule } from './camera-or-gallery-routing.module';

import { CameraOrGalleryPage } from './camera-or-gallery.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CameraOrGalleryPageRoutingModule
  ],
  declarations: [CameraOrGalleryPage]
})
export class CameraOrGalleryPageModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CameraOrGalleryPage } from './camera-or-gallery.page';

const routes: Routes = [
  {
    path: '',
    component: CameraOrGalleryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CameraOrGalleryPageRoutingModule {}

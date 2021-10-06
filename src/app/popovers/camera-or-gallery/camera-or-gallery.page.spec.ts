import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CameraOrGalleryPage } from './camera-or-gallery.page';

describe('CameraOrGalleryPage', () => {
  let component: CameraOrGalleryPage;
  let fixture: ComponentFixture<CameraOrGalleryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CameraOrGalleryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CameraOrGalleryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

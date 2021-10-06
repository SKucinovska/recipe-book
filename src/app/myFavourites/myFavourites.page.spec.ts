import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { myFavouritesPage } from './myFavourites.page';

describe('myFavouritesPage', () => {
  let component: myFavouritesPage;
  let fixture: ComponentFixture<myFavouritesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [myFavouritesPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(myFavouritesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

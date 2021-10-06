import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';

const routes: Routes = [
  {path: '', redirectTo:'login', pathMatch:'full'}, 
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  { path: 'tabs', 
  canActivate: [AngularFireAuthGuard],loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: '',
  canActivate: [AngularFireAuthGuard], loadChildren: './tabs/tabs.module#TabsPageModule' }, 
  {
    path: 'home',
    canActivate: [AngularFireAuthGuard],
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'shoppingList/:id',
    loadChildren: () => import('./pages/shoppingList/shoppingList.module').then( m => m.ShoppingListPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'add-recipe',
    loadChildren: () => import('./pages/add-recipe/add-recipe.module').then( m => m.AddRecipePageModule)
  },
  {
    path: 'recipe-details/:id',
    loadChildren: () => import('./pages/recipe-details/recipe-details.module').then( m => m.RecipeDetailsPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(){
  }
}


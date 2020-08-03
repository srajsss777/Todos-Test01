import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('src/prelogin/module').then(m => m.PreloginModule),
  },
  {
    path: 'app',
    loadChildren: () => import('src/postlogin/module').then(m => m.PostloginModule),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }

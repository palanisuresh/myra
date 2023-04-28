import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SitelayoutComponent} from './sitelayout/sitelayout.component';

const routes: Routes = [


{
     path:'',
    component:SitelayoutComponent,
     children: [
            
            { path : 'home',loadChildren: () => import('./pages/home/home.module').then( m => m.HomeModule) },
            { path : 'product-details',loadChildren: () => import('./pages/product-details/product-details.module').then( m => m.ProductDetailsModule) },


           

            // // { path: 'searchpage/:tab',     component: SearchPageComponent},

            // { path: 'manage-photos',     component: ManagePhotosComponent},
            { path : 'login',loadChildren: () => import('./pages/login/login.module').then( m => m.LoginModule) },

            { path: '', redirectTo: 'home', pathMatch: 'full' },
            ],
   
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

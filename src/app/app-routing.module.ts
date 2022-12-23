import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DigitalComponent } from './pages/digital/digital.component';
import { HomeComponent } from './pages/home/home.component';
import { LiveStreamComponent } from './pages/live-stream/live-stream.component';
import { FeedsComponent } from './pages/feeds/feeds.component';

import { ShopComponent } from './pages/shop/shop.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './pages/products/products.component';

const routes: Routes = [
  { path: 'home',component:HomeComponent},
  { path: 'shop', component:ShopComponent},
  {path:'live-stream',component:LiveStreamComponent},
  {path:'digital-clienteling',component:DigitalComponent},
  {path:'shop/feeds',component:FeedsComponent},
  {path:'shop/products',component:ProductsComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'cart',component:CartComponent}
  /// { path: 'shop', loadChildren: () => import('./pages/shop/shop.module').then(m => m.ShopModule) }
  // { path: 'shop', component: ShopComponent,
  //   children: [
  //     { path: 'feeds',redirectTo:'shop',component: FeedsComponent },
  //     { path: 'products', component: ProductsComponent   }
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

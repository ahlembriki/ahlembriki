import { Host, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { SaleComponent } from './sale/sale.component';
import { HeaderComponent } from './header/header.component';
import { DetailComponent } from './detail/detail.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { SignupComponent } from './signup/signup.component';
import { ShopComponent } from './shop/shop.component';
import { UserComponent } from './user/user.component';
import { ListuserComponent } from './listuser/listuser.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { AddarticleComponent } from './addarticle/addarticle.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [
 
  
  {
    path:'home',component:HomeComponent},
  {
    path:'cart',component:CartComponent},
  {
    path:'sale',component:SaleComponent},
  {
    path:'header',component:HeaderComponent},
  {
    path:'footer',component:HeaderComponent},
  {
    path:'cart',component:CartComponent},
  {
    path:'checkout',component:CheckoutComponent},
  {
    path:'detail/:id',component:DetailComponent},



  {
    path:'',component:ShopComponent},

  {
    path:'user',component:UserComponent},
  {
    path:'listuser',component:ListuserComponent},

  { path: 'updateuser/:id', component:UpdateuserComponent },

  {
    path:'addarticle',component:AddarticleComponent},
    {
      path:'signup',component:SignupComponent},
      {
        path:'login',component:LoginComponent},

        {
          path:'profile',component:ProfileComponent},

          {
            path:'settings',component:SettingsComponent},
            {
              path:'orders',component:OrdersComponent},
    
  

    
     


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

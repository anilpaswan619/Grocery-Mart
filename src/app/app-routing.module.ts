import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ShopComponent } from './header/nav/shop/shop.component';
import { OffersComponent } from './header/nav/offers/offers.component';
import { ContactComponent } from './header/nav/contact/contact.component';
import{AboutUsComponent } from './header/nav/about-us/about-us.component';
import { CarouselComponent } from './carousel/carousel.component';

const routes: Routes = [
 {path: '', component: CarouselComponent},
  { path: 'about-us', component: AboutUsComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'offers', component: OffersComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

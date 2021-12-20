import { Component } from '@angular/core';
import {CartService} from "../cart.service";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  items$ = this.cartService.cart;
  constructor(private cartService: CartService) {
    this.items$.subscribe(res => {
      console.log("items in cart", res);
    })
  }

}
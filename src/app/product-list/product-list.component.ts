import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {CartService} from "../cart.service";
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  allProducts:any = [] 
  filteredProducts:any = [];
  cartArray:any = [];
  activeProduct:any = "Shop By Category";
  constructor(private httpClient:HttpClient, private cartService: CartService) { }

  ngOnInit(): void {
    this.httpClient.get("./assets/products.json").subscribe((res:any) => {

      this.allProducts=res
      this.filteredProducts= this.allProducts;

    })

  }
  filterProduct(type : string) {
    if(type=='All'){
      this.filteredProducts = this.allProducts;
      this.activeProduct = "Shop By Category";
      return;
    }
    {

    this.activeProduct=type;
    }
    this.filteredProducts = this.allProducts.filter( (product:any) => {
       return product.type == type;

    } ) 

  }
  share(product:any) {
    this.cartArray.push(product);
    console.log(this.cartArray);
    this.cartService.cart.next(this.cartArray);
    window.alert('This product has been added to the Cart!');
    
  }
}
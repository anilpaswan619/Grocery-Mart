import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: BehaviorSubject<any> = new BehaviorSubject([]);
  constructor() { }

}

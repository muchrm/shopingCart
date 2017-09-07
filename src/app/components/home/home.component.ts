import { Component, OnInit } from '@angular/core';
import { ShopingCartService } from '../../services/shoping-cart.service'
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  product: any;
  item: any;
  cart: any[] = [];
  // countId = 0;
  countItem = 0;
  constructor(private shopingCartService: ShopingCartService) {
    this.item = {
      id: 0,
      name: '',
      prices: '',
      image: '',
      color: '',
      total: 0,
      out_of_stock: false
    };
    console.log(this.item);
  }

  ngOnInit() {
    this.shopingCartService.getProduct().subscribe(res => {
      this.product = res;
      //  console.log(this.product)
    });
  }
  addCart(product) {
    const index = this.cart.indexOf(product);
    if (index !== -1) {
      this.cart[index].quantity++;
    } else {
      product.quantity = 1;
      this.cart.push(product);
    }
  }


}

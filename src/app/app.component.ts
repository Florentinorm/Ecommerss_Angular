import { Component, OnInit } from '@angular/core';
import { CartService } from './service/cart.service';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'mexican-eat';
  faShoppingCart=faShoppingCart;
  public totalItem : number = 0;

  constructor(private cartService : CartService){}

  ngOnInit(): void{
  this.cartService.getProducts().subscribe(res=>{
    this.totalItem = res.length;
  })
  }
}

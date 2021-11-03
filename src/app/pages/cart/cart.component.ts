import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public productos : any = [];
  grandTotal : number = 0;
  listas: any[] = [];

  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.productos = res;
      this.grandTotal = this.cartService.getTotalPrecio();
      console.log(this.grandTotal);
    })
 /*Calcular
 this.grandTotal = this.productos.reduce((
  acc,
  obj,

  )=> acc + (obj.price * obj.quantity),0);
  console.log("Total: ", this.grandTotal)*/

  }



  removeItem(item: any){
    this.cartService.removeCartItem(item);

  }
  emptycart(){
    this.cartService.removeAllCart();
  }

}

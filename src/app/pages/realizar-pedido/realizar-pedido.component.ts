import { Component, OnInit } from '@angular/core';
import { ApiService, Producto } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';


/*
import { ApiService } from 'src/app/service/api.service';
*/
@Component({
  selector: 'app-realizar-pedido',
  templateUrl: './realizar-pedido.component.html',
  styleUrls: ['./realizar-pedido.component.scss']
})
export class RealizarPedidoComponent implements OnInit {
  //variable
  productos:Producto[] = [];

  constructor(private _productoService:ApiService, private cartService : CartService) {

  }

/*aqui se hace mencion a las lista de la appi
  ngOnInit(): void {
    this.api.getProduct()
    .subscribe(res=>{
      this.productList = res;
    })

  }*/

  ngOnInit() {
    this.productos = this._productoService.getProductos();
    console.log(this.productos);

    this.productos.forEach((a: any)=>{
        Object.assign(a,{quantity: 1, total:a.price})

    })

  }

  addtoCart(productos: any){
    this.cartService.addtoCart(productos);
  }


}

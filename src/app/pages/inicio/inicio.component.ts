import { Component, OnInit } from '@angular/core';
import { ApiService, Producto } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  faCartPlus= faCartPlus;
  public productos : any = [];
  constructor(private _productoService:ApiService, private cartService : CartService) { }

  ngOnInit() {
    
    this.productos = this._productoService.getProductos();
    

    this.productos.forEach((a: any)=>{
        Object.assign(a,{quantity: 1, total:a.price})

    })

  }

  addtoCart(productos: any){
    this.cartService.addtoCart(productos);
  }


}



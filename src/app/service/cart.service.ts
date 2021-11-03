import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {



public cartItemList : any = []

public productList = new BehaviorSubject<any>([]);


  constructor() { }

getProducts(){
 return  this.productList.asObservable();
}


setProduct(productos : any){
  this.cartItemList.push(...productos);
this.productList.next(productos);
}

addtoCart(productos : any){
  this.cartItemList.push(productos);
  this.productList.next(this.cartItemList);
  this.getTotalPrecio();
  console.log(this.cartItemList);
}

getTotalPrecio() : number{
 let grandTotal = 0;
 this.cartItemList.map((a:any)=>{
   grandTotal += a.total;

 })
 return grandTotal;
}
// para dejar vacia la tabla
removeCartItem(productos: any){
  this.cartItemList.map((a:any, index:any)=>{
  if(productos.id=== a.id){
    this.cartItemList.splice(index,1);
    console.log(productos);
  }

  })
  this.productList.next(this.cartItemList);

}
removeAllCart(){
  this.cartItemList = []
  this.productList.next(this.cartItemList);

}

}

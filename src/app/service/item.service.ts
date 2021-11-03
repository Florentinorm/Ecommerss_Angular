import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {



public itemList : any = []

public productList = new BehaviorSubject<any>([]);


  constructor() { }

getProducts(){
 return  this.productList.asObservable();
}


setProduct(productos : any){
  this.itemList.push(...productos);
this.productList.next(productos);
}




}

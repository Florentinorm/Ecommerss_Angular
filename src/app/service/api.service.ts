
/*
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from  'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }



  getProduct(){
    return this.http.get<any>("https://fakestoreapi.com/products")
    .pipe(map((res:any)=>{
    return res;
  }))

  }

}*/

/*el injectable es un decorador para creer un servicio */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  ngOnInit(): void {
    console.log("productos");
  }
 
  /*propiedad privada que no debe pueden acceder fuera del servicio  */
   productos:any[] = [
    {
      nombre: "Enchiladas",
      bio: "Las enchiladas es un típico plato mexicano que se elabora con tortilla de maíz, bañada en una salsa, picante o no, utilizando un chile en su preparación.",
      img: "../../assets/img/enchiladas.jpg",
      price: 50.00,
      casa:"DC"
    },
    {
      nombre: "Pozole",
      bio: "El pozole es una sopa tradicional mexicana hecha a base de granos de maíz nixtamalizados, comúnmente de la variedad cacahuazintle, al que se agregan carnes, verduras y especias muy variadas según la región.",
      img: "../../assets/img/pozole.jpg",
      price: 80.00,
      casa:"DC"
    },
    {
      nombre: "Cochinita Pibil",
      bio: "Platillo típico de la cocina de la península de Yucatán preparado con carne de lechón o cerdo condimentado con recado rojo (mezcla de achiote con especias). Tradicionalmente se hornea en pib (horno subterráneo).",
      img: "../../assets/img/cochinita.jpg",
      price: 68.00,
      casa: "Marvel"
    },
    {
      nombre: "Chiles en Nogada",
      bio: "Consiste en chiles verdes poblanos previamente asados y pelados, rellenos con al menos 20 ingredientes, entre los que destacan la carne de cerdo o res, jitomate, cebolla, almendras, piñones y especias, diversos frutos como manzana, granada y durazno, por mencionar algunos",
      img: "../../assets/img/chilesogada.png",
      price: 65.00,
      casa:"Marvel "
    },
    {
      nombre: "Barbacoa",
      bio: "La barbacoa es eso, un sistema de cocción en el que la carne no tiene contacto directo con el fuego, sólo con el calor del hoyo, sin mezclar líquido alguno que pueda hacerle perder parte de su sustancia y sabor.",
      img: "../../assets/img/barbacoa.jpg",
      price: 350.00,
      casa: "DC"
    },
    {
      nombre: "Tlayudas",
      bio: "La tlayuda es una tortilla de maíz nixtamalizado típica de los Valles Centrales del estado de Oaxaca. ... Su sabor es muy diferente al de cualquier otra tortilla, debido a que, al ser semitostada en un comal de barro, adquiere una consistencia que va de flexible a semiquebradiza, sin llegar a ser propiamente una tostada.",
      img: "../../assets/img/Tlayudas.jpg",
      price: 45.00,
      casa: "Marvel"
    },
    {
      nombre: "Mole",
      bio: "El mole poblano es una especialidad culinaria de la ciudad de Puebla. Consiste principalmente en una salsa, hecha con una gran variedad de ingredientes, vertida sobre piezas de guajolote o pavo. Es uno de los platillos más representativos del país. La historia del mole se remonta a la época precolombina.",
      img: "../../assets/img/mole.jpg",
      price: 60.00,
      casa: "Marvel"
    }
  ];





  constructor() {
   }

//metodo
   getProductos(){
return this.productos;
   }
  }
// crear una interface para decir qeu esto es un arreglo d
//si se va amodificar algo en el arreglo primero es aqui despues alla

export interface Producto{
  nombre: string;
  bio: string;
  img: string;
  price: number;
  casa: string;
  idx?: number;



}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapaComponent } from './pages/mapa/mapa.component';
import { LoginComponent } from './pages/login/login.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { RealizarPedidoComponent } from './pages/realizar-pedido/realizar-pedido.component';
import { CartComponent } from './pages/cart/cart.component';
import { PagarComponent } from './pages/pagar/pagar.component';

const routes: Routes = [

  {path: '', redirectTo: '/login', pathMatch: 'full' },
  {path: 'mapa', component: MapaComponent},
  {path: 'login', component: LoginComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'pedido', component: RealizarPedidoComponent},
  {path: 'carrito',component: CartComponent},
  {path: 'pagar',component: PagarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

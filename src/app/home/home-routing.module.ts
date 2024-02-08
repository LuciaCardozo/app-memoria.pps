import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalesComponent } from './animales/animales.component';
import { ColoresComponent } from './colores/colores.component';
import { HomePage } from './home.page';
import { NumerosComponent } from './numeros/numeros.component';
import { Top5Component } from './top5/top5.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'animales',
    component: AnimalesComponent,
  },
  {
    path: 'colores',
    component: ColoresComponent,
  },
  {
    path: 'numeros',
    component: NumerosComponent
  },
  {
    path: 'top5',
    component: Top5Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { AnimalesComponent } from './animales/animales.component';
import { ColoresComponent } from './colores/colores.component';
import { NumerosComponent } from './numeros/numeros.component';
import { Top5Component } from './top5/top5.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
  ],
  declarations: [HomePage, AnimalesComponent, ColoresComponent, NumerosComponent, Top5Component]
})
export class HomePageModule {}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { SharedService } from '../services/shared/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  //titulo = 'Tabla didactica de '+new TitleCasePipe().transform(this.auth.emailUsuarioLogeado.split('@')[0]);
  constructor(private route:Router, public shared:SharedService, private auth:AuthService) {}

  clickEnImg(dato: string) {
    console.log(dato);
    this.route.navigate(['home/'+dato]);
  }

  IrATop5(nivel: string) {
    let lista = this.auth.listaTop5.filter((jugador:any)=> jugador.nivel == nivel)
    let listaAux = lista.sort((a:any, b:any) => {
      if(a.seg < b.seg){
        return -1
      }
      else if(a.seg > b.seg) {
        return 1
      }
      else{
        return 0
      }
    })
    this.auth.listaTop5ParaMostrar = listaAux.slice(0,4+1)
    this.shared.nivel = nivel;
    this.route.navigate(['home/top5']);
  }
}

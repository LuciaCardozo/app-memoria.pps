import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { SharedService } from 'src/app/services/shared/shared.service';

@Component({
  selector: 'app-animales',
  templateUrl: './animales.component.html',
  styleUrls: ['./animales.component.scss'],
})
export class AnimalesComponent  implements OnInit {
  validar: boolean = false;
  tarjetasSeleccionadas:any = []
  posicionUno: number = -1;
  posicionDos: number = -1;
  timer: number = 0;
  stopTimer: boolean = false;
  //Frutas 8
  opciones = [{titulo: 0, src:'../../../assets/frutas/anana-01.svg', flipped: false},{titulo: 1, src:'../../../assets/frutas/manzana-01.svg', flipped: false},
    {titulo: 2, src:'../../../assets/frutas/cereza-01.svg', flipped: false},{titulo: 3, src:'../../../assets/frutas/naranja-01.svg', flipped: false},
    {titulo: 4, src:'../../../assets/frutas/ciruela-01.svg', flipped: false},{titulo: 5, src:'../../../assets/frutas/pera-01.svg', flipped: false},
    {titulo: 6, src:'../../../assets/frutas/frutilla-01.svg', flipped: false},{titulo: 7, src:'../../../assets/frutas/platano-01.svg', flipped: false},
    {titulo: 8, src:'../../../assets/frutas/sandia-01.svg', flipped: false},{titulo: 9, src:'../../../assets/frutas/uva-01.svg', flipped: false},
  ]
  obtenerTresOpciones:any = [];
  listaRandom:any = [];
  intervalo :any;
  modalFinalizado: boolean = false;
  constructor(public shared: SharedService, private router: Router, private auth:AuthService) { }

  ngOnInit() {

    this.cargarDatos();
   // console.log(this.listaClone)
    console.log(this.listaRandom)

  }

  cargarDatos() {
    for( let i = 0; i < 8; i ++ ) {
      let dato:any = Math.floor(Math.random() * this.opciones.length);
      let existe = this.obtenerTresOpciones.find((value:any)=> value.titulo == dato);
      console.log(existe)
      if(!existe) {
        this.obtenerTresOpciones.push(this.opciones[dato])
      } else {
        i --;
      }
    }
    this.listaRandom = [...this.obtenerTresOpciones.sort((a:any,b:any)=> a.titulo > b.titulo),
       {...this.obtenerTresOpciones[0]},{...this.obtenerTresOpciones[6]},{...this.obtenerTresOpciones[1]},
       {...this.obtenerTresOpciones[4]},{...this.obtenerTresOpciones[2]},{...this.obtenerTresOpciones[7]},
       {...this.obtenerTresOpciones[5]},{...this.obtenerTresOpciones[3]}]

    this.intervalo = setInterval(()=>{
      this.timer += 1;
    },1000);
    console.log(this.obtenerTresOpciones)
  }


  volverAlHome(){
    this.timer = 0;
    this.obtenerTresOpciones = [];
    this.modalFinalizado = false;
    this.router.navigate(['/home']);
  }

  seSeleccionoColor(tarjeta:any) {

    if(this.tarjetasSeleccionadas.length< 2) {
      tarjeta.flipped = true;
      this.tarjetasSeleccionadas.push(tarjeta)
    }
    if(this.tarjetasSeleccionadas.length == 2) {

      if(this.tarjetasSeleccionadas[0].titulo != this.tarjetasSeleccionadas[1].titulo) {
        console.log('entre gil')
        setTimeout(()=> {
          this.tarjetasSeleccionadas[0].flipped = false;
          this.tarjetasSeleccionadas[1].flipped = false;
          this.tarjetasSeleccionadas = [];
        },500)
      } else{
        this.tarjetasSeleccionadas = [];
      }
    }
    let dato = this.listaRandom.map((valor:any)=> valor.flipped == false)
    if(!dato.includes(true)){
      clearInterval(this.intervalo);
      this.modalFinalizado = true;
      let fecha = new Date;
      this.guardarEnFirebase({nombre:this.auth.usuarioLogeado.nombre, seg:this.timer, fecha: fecha.toLocaleDateString(), nivel: 'Difícil'})
    }
  }

  guardarEnFirebase(dato:any) {
    this.auth.alta('top5',dato);
  }

  borrarIntervalo(intervalo:any){
    clearInterval(intervalo);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { SharedService } from 'src/app/services/shared/shared.service';

@Component({
  selector: 'app-colores',
  templateUrl: './colores.component.html',
  styleUrls: ['./colores.component.scss'],
})
export class ColoresComponent  implements OnInit {
  validar: boolean = false;
  tarjetasSeleccionadas:any = []
  posicionUno: number = -1;
  posicionDos: number = -1;
  timer: number = 0;
  stopTimer: boolean = false;
  //Animales 3
  opciones = [{titulo: 0, src:'../../../assets/animales/caballo-01.svg', flipped: false},{titulo: 1, src:'../../../assets/animales/chancho-01.svg', flipped: false},
    {titulo: 2, src:'../../../assets/animales/conejo-01.svg', flipped: false},{titulo: 3, src:'../../../assets/animales/gato-01.svg', flipped: false},
    {titulo: 4, src:'../../../assets/animales/toto-01.svg', flipped: false},{titulo: 5, src:'../../../assets/animales/raton-01.svg', flipped: false},
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
    for( let i = 0; i < 3; i ++ ) {
      let dato:any = Math.floor(Math.random() * this.opciones.length);
      let existe = this.obtenerTresOpciones.find((value:any)=> value.titulo == dato);
      console.log(existe)
      if(!existe) {
        this.obtenerTresOpciones.push(this.opciones[dato])
      } else {
        i --;
      }
    }
    this.listaRandom = [...this.obtenerTresOpciones.sort((a:any,b:any)=> a.titulo > b.titulo), {...this.obtenerTresOpciones[0]},{...this.obtenerTresOpciones[2]},{...this.obtenerTresOpciones[1]}]
    this.intervalo = setInterval(()=>{
      this.timer += 1;
    },1000);
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
      this.guardarEnFirebase({nombre:this.auth.usuarioLogeado.nombre, seg:this.timer, fecha: fecha.toLocaleDateString(), nivel: 'Fácil'})
    } 
  }

  guardarEnFirebase(dato:any) {
    this.auth.alta('top5',dato);
  }

  borrarIntervalo(intervalo:any){
    clearInterval(intervalo);
  }


 
}

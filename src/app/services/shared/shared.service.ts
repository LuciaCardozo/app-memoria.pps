import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  animales: any = {};
  colores: any = {};
  numeros: any = {};
  bandera: string = '';
  banderaActual:string = 'assets/Bandera espana.png';
  nivel:string = '';
  
  constructor() { }

  audioEnEspaniol(){
    this.bandera = 'espana';
    this.animales = {
      gato:'/assets/audios/Español/Animales/Animal gato.m4a',
      perro:'/assets/audios/Español/Animales/Animal perro.m4a',
      conejo:'/assets/audios/Español/Animales/Animal conejo.m4a',
      vaca:'/assets/audios/Español/Animales/Animal vaca.m4a',
      toro:'/assets/audios/Español/Animales/Animal toro.m4a',
      cebra:'/assets/audios/Español/Animales/Animal cebra.m4a',
      caballo:'/assets/audios/Español/Animales/Animal caballo.m4a',
      leon:'/assets/audios/Español/Animales/Animal león.m4a',
      jirafa:'/assets/audios/Español/Animales/Animal jirafa.m4a',
      elefante:'/assets/audios/Español/Animales/Animal elefante.m4a',
      chancho:'/assets/audios/Español/Animales/Animal chancho.m4a',
      hipopotamo:'/assets/audios/Español/Animales/Animal hipopotamo.m4a',
    };
    this.colores = {
      rojo: '/assets/audios/Español/Colores/Color rojo.m4a',
      azul: '/assets/audios/Español/Colores/Color azul.m4a',
      amarillo: '/assets/audios/Español/Colores/Color amarillo.m4a',
      verde: '/assets/audios/Español/Colores/Color verde.m4a',
      violeta: '/assets/audios/Español/Colores/Color violeta.m4a',
      negro: '/assets/audios/Español/Colores/Color negro.m4a',
      marron: '/assets/audios/Español/Colores/Color marrón.m4a',
      rosado: '/assets/audios/Español/Colores/Color rosado.m4a',
      blanco: '/assets/audios/Español/Colores/Color blanco.m4a',
      naranja: '/assets/audios/Español/Colores/Color naranja.m4a',
    },
    this.numeros = {
      cero: '/assets/audios/Español/Numeros/0.Numero cero.m4a',
      uno: '/assets/audios/Español/Numeros/1.Numero uno.m4a',
      dos: '/assets/audios/Español/Numeros/2.Numero dos.m4a',
      tres: '/assets/audios/Español/Numeros/3.Numero tres.m4a',
      cuatro: '/assets/audios/Español/Numeros/4.Numero cuatro.m4a',
      cinco: '/assets/audios/Español/Numeros/5.Numero cinco.m4a',
      seis: '/assets/audios/Español/Numeros/6.Numero seis.m4a',
      siete: '/assets/audios/Español/Numeros/7.Numero siete.m4a',
      ocho: '/assets/audios/Español/Numeros/8.Numero ocho.m4a',
      nueve: '/assets/audios/Español/Numeros/9.Numero nueve.m4a',
    }
  }

  audioEnIngles(){
    this.bandera = 'ingles';
    this.animales = {
      gato:'/assets/audios/Ingles/Animales/Animal cat.m4a',
      perro:'/assets/audios/Ingles/Animales/Animal dog.m4a',
      conejo:'/assets/audios/Ingles/Animales/Animal rabbit.m4a',
      vaca:'/assets/audios/Ingles/Animales/Animal cow.m4a',
      toro:'/assets/audios/Ingles/Animales/Animal bull.m4a',
      cebra:'/assets/audios/Ingles/Animales/Animal zebra ingles.m4a',
      caballo:'/assets/audios/Ingles/Animales/Animal horse.m4a',
      leon:'/assets/audios/Ingles/Animales/Animal lion.m4a',
      jirafa:'/assets/audios/Ingles/Animales/Animal giraffe.m4a',
      elefante:'/assets/audios/Ingles/Animales/Animal elephant.m4a',
      chancho:'/assets/audios/Ingles/Animales/Animal pig.m4a',
      hipopotamo:'/assets/audios/Ingles/Animales/Animal hippo.m4a',
    };
    this.colores = {
      rojo: '/assets/audios/Ingles/Colores/Color red.m4a',
      azul: '/assets/audios/Ingles/Colores/Color blue.m4a',
      amarillo: '/assets/audios/Ingles/Colores/Color yellow.m4a',
      verde: '/assets/audios/Ingles/Colores/Color green.m4a',
      violeta: '/assets/audios/Ingles/Colores/Color violet.m4a',
      negro: '/assets/audios/Ingles/Colores/Color black.m4a',
      marron: '/assets/audios/Ingles/Colores/Color brown.m4a',
      rosado: '/assets/audios/Ingles/Colores/Color pink.m4a',
      blanco: '/assets/audios/Ingles/Colores/Color white.m4a',
      naranja: '/assets/audios/Ingles/Colores/Color orange.m4a',
    },
    this.numeros = {
      cero: '/assets/audios/Ingles/Numeros/0.Numero zero.m4a',
      uno: '/assets/audios/Ingles/Numeros/1.Numero one.m4a',
      dos: '/assets/audios/Ingles/Numeros/2.Numero two.m4a',
      tres: '/assets/audios/Ingles/Numeros/3.Numero three.m4a',
      cuatro: '/assets/audios/Ingles/Numeros/4.Numero four.m4a',
      cinco: '/assets/audios/Ingles/Numeros/5.Numero five.m4a',
      seis: '/assets/audios/Ingles/Numeros/6.Numero six.m4a',
      siete: '/assets/audios/Ingles/Numeros/7.Numero seven.m4a',
      ocho: '/assets/audios/Ingles/Numeros/8.Numero eight.m4a',
      nueve: '/assets/audios/Ingles/Numeros/9.Numero nine.m4a',
    }
  }

  audioEnPortugues(){
    this.bandera = 'portugues';
    this.animales = {
      gato:'/assets/audios/Portugues/Animales/Animal gato port.m4a',
      perro:'/assets/audios/Portugues/Animales/Animal cachorro port.m4a',
      conejo:'/assets/audios/Portugues/Animales/Animal coelho.m4a',
      vaca:'/assets/audios/Portugues/Animales/Animal vaca port.m4a',
      toro:'/assets/audios/Portugues/Animales/Animal touro.m4a',
      cebra:'/assets/audios/Portugues/Animales/Animal zebra.m4a',
      caballo:'/assets/audios/Portugues/Animales/Animal cavalo.m4a',
      leon:'/assets/audios/Portugues/Animales/Animal leão.m4a',
      jirafa:'/assets/audios/Portugues/Animales/Animal girafa.m4a',
      elefante:'/assets/audios/Portugues/Animales/Animal elefante port.m4a',
      chancho:'/assets/audios/Portugues/Animales/Animal porco.m4a',
      hipopotamo:'/assets/audios/Portugues/Animales/Animal hipopotamo port.m4a',
    };
    this.colores = {
      rojo: '/assets/audios/Portugues/Colores/Color vermelho.m4a',
      azul: '/assets/audios/Portugues/Colores/Color azul port.m4a',
      amarillo: '/assets/audios/Portugues/Colores/Color amarelo.m4a',
      verde: '/assets/audios/Portugues/Colores/Color verde port.m4a',
      violeta: '/assets/audios/Portugues/Colores/Color tolet.m4a',
      negro: '/assets/audios/Portugues/Colores/Color preto.m4a',
      marron: '/assets/audios/Portugues/Colores/Color marrom.m4a',
      rosado: '/assets/audios/Portugues/Colores/Color rosa port.m4a',
      blanco: '/assets/audios/Portugues/Colores/Color branco.m4a',
      naranja: '/assets/audios/Portugues/Colores/Color laranja.m4a',
    },
    this.numeros = {
      cero: '/assets/audios/Portugues/Numeros/0.Numero zero port.m4a',
      uno: '/assets/audios/Portugues/Numeros/1.Numero um.m4a',
      dos: '/assets/audios/Portugues/Numeros/2.Numero dois.m4a',
      tres: '/assets/audios/Portugues/Numeros/3.Numero três.m4a',
      cuatro: '/assets/audios/Portugues/Numeros/4.Numero quatro.m4a',
      cinco: '/assets/audios/Portugues/Numeros/5.Numero cinco port.m4a',
      seis: '/assets/audios/Portugues/Numeros/6.Numero seis port.m4a',
      siete: '/assets/audios/Portugues/Numeros/7.Numero sete.m4a',
      ocho: '/assets/audios/Portugues/Numeros/8.Numero oito.m4a',
      nueve: '/assets/audios/Portugues/Numeros/9.Numero nove.m4a',
    }
  }
}

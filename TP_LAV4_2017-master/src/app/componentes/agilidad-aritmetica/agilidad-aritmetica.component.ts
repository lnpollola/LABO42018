import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { JuegoAgilidad } from '../../clases/juego-agilidad'

import {Subscription} from "rxjs";
import {TimerObservable} from "rxjs/observable/TimerObservable";
@Component({
  selector: 'app-agilidad-aritmetica',
  templateUrl: './agilidad-aritmetica.component.html',
  styleUrls: ['./agilidad-aritmetica.component.css']
})
export class AgilidadAritmeticaComponent implements OnInit {
  Mensajes: string;
  display : boolean = false;
 
  
  @Output() 
  enviarJuego :EventEmitter<any>= new EventEmitter<any>();

  nuevoJuego : JuegoAgilidad;
  ocultarVerificar: boolean;
  repetidor: any;
  segundos: number = 0;
  milisegundos: number = 0;
  cronometro: string;
  cronoMili: string;
  finDelJuego: boolean = false;
  
  private subscription: Subscription;
  ngOnInit() {
  }
  
  constructor() { 
     this.ocultarVerificar=true;
    this.nuevoJuego = new JuegoAgilidad(); 
    this.cronometro = '00:10.';
    this.cronoMili = '00';

  }
  
  showDialog() {
    this.display = true;
  }

  
  NuevoJuego() {    
    this.finDelJuego = false;
    this.nuevoJuego.GenerarCalculo();
    this.ocultarVerificar=false;
    this.segundos = 10;
    this.milisegundos = 100;
    clearInterval(this.repetidor);

    this.repetidor = setInterval( ()=> { 
      this.cronometro = '00:' + (this.segundos <= 9 ? '0' + this.segundos.toString() : this.segundos.toString()) + '.';
      this.cronoMili = this.milisegundos <= 9 ? '0' + this.milisegundos.toString() : this.milisegundos.toString();
      this.milisegundos-=1;
      if( this.milisegundos == 0)
      {
        this.milisegundos = 99;
        if(this.segundos != 0)
        {  
          this.segundos -=1;
          if(this.segundos == 5)
          {
            var x = document.getElementById("timer");
            x.className = "pocoTiempo";
          }
        }
        else
        {
          this.cronoMili = '00';
          var x = document.getElementById("timer");
          clearInterval(this.repetidor);
          this.verificar();
        }
      }
    }
      , 10);

  }

  keyDownFunction(event) {
    if(event.keyCode == 13) {
      this.verificar();
    }
  }

  rendirse()
  {
    this.nuevoJuego.respuesta = -99;
    this.verificar();
  }

  verificar()
  {
    this.nuevoJuego.verifica = true;
    this.ocultarVerificar=false;
    clearInterval(this.repetidor);
    this.nuevoJuego.gano = this.nuevoJuego.verificar();
    console.info(this.nuevoJuego);
  
    this.ocultarVerificar = true;    
  }  

}

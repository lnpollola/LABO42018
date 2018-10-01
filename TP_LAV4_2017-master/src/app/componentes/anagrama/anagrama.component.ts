import { Component, OnInit } from '@angular/core';
import { JuegoAnagrama } from '../../clases/juego-anagrama';

@Component({
  selector: 'app-anagrama',
  templateUrl: './anagrama.component.html',
  styleUrls: ['./anagrama.component.css']
})
export class AnagramaComponent implements OnInit {

  miJuego:JuegoAnagrama;
  jugador:string;
  ingresoUsuario:string;

  constructor() {
    this.jugador="amorelli";
    this.miJuego=new JuegoAnagrama(this.jugador);
   }

   Verificar(){
     this.miJuego.palabraUsuario= this.ingresoUsuario;
     this.miJuego.verificar();
     console.log(this.miJuego.gano, this.ingresoUsuario);
   }

  ngOnInit() {
  }

}

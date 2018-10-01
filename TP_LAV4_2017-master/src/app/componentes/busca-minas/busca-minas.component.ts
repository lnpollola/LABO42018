import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { BuscaMinas } from '../../clases/busca-minas';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-busca-minas',
  templateUrl: './busca-minas.component.html',
  styleUrls: ['./busca-minas.component.css']
})
export class BuscaMinasComponent implements OnInit {

  @Output() enviarJuego: EventEmitter<any>= new EventEmitter<any>();
  miJuego:BuscaMinas;
  nivel=7;
  mensaje="";

  constructor() {
    this.miJuego= new BuscaMinas(this.nivel);
    this.mensaje="";
   }

  ngOnInit() {
  }


public Jugar()
{
  this.miJuego=new BuscaMinas(this.nivel)
  this.mensaje="";

}

DescubrirCasilla(coor:Array<number>)
{
  this.miJuego.DescubrirCasilla(coor);
  
  if(this.miJuego.final && this.miJuego.gano)
  {
    this.mensaje="Ganaste!!";
  }
  if(this.miJuego.final && !(this.miJuego.gano))
  {
    this.mensaje="Perdiste...";
  }
}

public MarcarCasilla($event: MouseEvent,coor:Array<number>)
{
$event.preventDefault();
  this.miJuego.MarcarCasilla(coor);
  
  if(this.miJuego.final && this.miJuego.gano)
  {
    this.mensaje="Ganaste!!";
  }
  if(this.miJuego.final && !(this.miJuego.gano))
  {
    this.mensaje="Perdiste...";
  }


} 





 
 
}



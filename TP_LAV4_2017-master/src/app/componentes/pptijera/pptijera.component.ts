
import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { PiedraPapelTijera } from '../../clases/juego-piedra-papel-tijera';
import { JuegoServiceService } from '../../servicios/juego-service.service';

@Component({
  selector: 'app-pptijera',
  templateUrl: './pptijera.component.html',
  styleUrls: ['./pptijera.component.css']
})
export class PPTijeraComponent implements OnInit {

  juegoPPT: PiedraPapelTijera;
  Mensajes:string;
  ocultarOponente:boolean;

      @Output()
      enviarJuego:EventEmitter<any>= new EventEmitter<any>();
  
    constructor(private miServicio: JuegoServiceService) 
    { 
      this.juegoPPT = new PiedraPapelTijera("Piedra, Papel o Tijera", this.miServicio.TraerUsuario(), true);
      this.ocultarOponente = true;
    }
  
    Piedra()
    {
      this.juegoPPT = new PiedraPapelTijera("Piedra, Papel o Tijera",this.miServicio.TraerUsuario(), true);
      this.ocultarOponente = false;
      this.juegoPPT.Piedra();
      if(this.juegoPPT.resultado == "Gano")
      this.MostarMensaje("Gano");        
    if(this.juegoPPT.resultado == "Empato")
           this.MostarMensaje("Empato");  
    if(this.juegoPPT.resultado == "Perdio")
     this.MostarMensaje("Perdio");
      
      this.ocultarOponente = false;
      //this.juegoPPT.jugador = this.miServicio.retornarUsuario();
      this.enviarJuego.emit(this.juegoPPT);
      
    }
  
    Papel()
    {
      this.juegoPPT = new PiedraPapelTijera("Piedra, Papel o Tijera", this.miServicio.TraerUsuario(), true);
      this.ocultarOponente = false;
      this.juegoPPT.Papel();
      if(this.juegoPPT.resultado == "Gano")
      this.MostarMensaje("Gano");        
       if(this.juegoPPT.resultado == "Empato")
           this.MostarMensaje("Empato");  
       if(this.juegoPPT.resultado == "Perdio")
        this.MostarMensaje("Perdio");
      
      //this.juegoPPT.jugador = this.miServicio.retornarUsuario();
      this.enviarJuego.emit(this.juegoPPT);
      
    }
  
    Tijera()
    {
      this.juegoPPT = new PiedraPapelTijera("Piedra, Papel o Tijera", this.miServicio.TraerUsuario(), true);
      this.ocultarOponente = false;
      this.juegoPPT.Tijera();
      if(this.juegoPPT.resultado == "Gano")
        this.MostarMensaje("Gano");        
      if(this.juegoPPT.resultado == "Empato")
             this.MostarMensaje("Empato");  
      if(this.juegoPPT.resultado == "Perdio")
       this.MostarMensaje("Perdio");
      
      

      
     // this.juegoPPT.jugador = this.miServicio.retornarUsuario();
      this.enviarJuego.emit(this.juegoPPT);
      
    }

    MostarMensaje(mensaje:string="este es el mensaje") {
      this.Mensajes=mensaje;    
      var x = document.getElementById("snackbar");
      
        if(this.juegoPPT.resultado == "Gano")
        x.className = "show Ganador";      
        if(this.juegoPPT.resultado == "Empato")
        x.className = "show Empate"; 
        if(this.juegoPPT.resultado == "Perdio")
          x.className = "show Perdedor";
      var modelo=this;
  
      setTimeout(function(){ 
        x.className = x.className.replace("show", "");
        modelo.ocultarOponente=true;
       }, 3000);
    
     }  
  
    ngOnInit() {
    }
  
  }

  /*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pptijera',
  templateUrl: './pptijera.component.html',
  styleUrls: ['./pptijera.component.css']
})
export class PptijeraComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
*/
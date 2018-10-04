import { Component, OnInit } from '@angular/core';
import { Helado } from '../../clases/helado';
import { HeladosService } from '../../servicios/heladosService.service';

@Component({
  selector: 'app-respuesta-buscar',
  templateUrl: './respuesta-buscar.component.html',
  styleUrls: ['./respuesta-buscar.component.css']
})
export class RespuestaBuscarComponent implements OnInit {
  helado : any;
  constructor(private _servicio:HeladosService) { }

  ngOnInit() {
  }

  RecibirRespuesta(respuesta)
  {
    if(respuesta.kilos==0)
    {
      console.log("no hay stock!!!");
    }
    else{
      console.log("no se encontro el helado");
    }
  }
  
  AltaHelado(){
    this.helado = new Helado('Mascarpoe','Crema',1);
    console.log(this.helado);
    this._servicio.ServiceAltaHelado(this.helado)
    .subscribe()
    ;
  
  }

}

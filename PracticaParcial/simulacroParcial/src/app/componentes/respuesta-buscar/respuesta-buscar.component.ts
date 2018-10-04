import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-respuesta-buscar',
  templateUrl: './respuesta-buscar.component.html',
  styleUrls: ['./respuesta-buscar.component.css']
})
export class RespuestaBuscarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  RecibirRespuesta(respuesta)
  {
    if(respuesta.kilos==0)
    {
      console.log("no hay estock!!!");
    }
    else{
      console.log("no se encontro el helado");
    }
  }

}

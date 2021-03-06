import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ServicioHeladosService } from '../../servicios/servicio-helados.service';

@Component({
  selector: 'app-busqueda-helado',
  templateUrl: './busqueda-helado.component.html',
  styleUrls: ['./busqueda-helado.component.css']
})
export class BusquedaHeladoComponent implements OnInit {

  @Output() lanzador = new EventEmitter();
  sabor:string;
  respuesta:any;
  constructor(private httpHelado:ServicioHeladosService) { }


  BuscarHelado(){
    this.httpHelado.TraerUnHelado(this.sabor)
    .subscribe((data)=>{

      let rtaJson=JSON.parse(data._body);

      if(rtaJson.kilos==0 || rtaJson.error=="No existe" )
      {
        console.log(rtaJson);
        this.lanzador.emit(rtaJson);
      }
      else{
        console.log(rtaJson);
        this.respuesta=rtaJson;
      }
    })
  }



  ngOnInit() {
  }

}

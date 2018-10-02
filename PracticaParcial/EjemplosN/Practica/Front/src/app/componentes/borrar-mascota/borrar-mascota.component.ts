import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

import { mascotasService } from '../../servicios/mascotas.service';

import { mascota } from '../../clases/mascota';

@Component({
  selector: 'app-borrar-mascota',
  templateUrl: './borrar-mascota.component.html',
  styleUrls: ['./borrar-mascota.component.css']
})
export class BorrarMascotaComponent implements OnInit {

	@Input() id:string;
  miServicioDemascotas:mascotasService;

  constructor( serviciomascotas:mascotasService ) { 

    this.miServicioDemascotas = serviciomascotas;

  }

  ngOnInit() {
  }

   borrarUno(){

      var datos = "id=" + this.id;
      
      this.miServicioDemascotas.borrar(datos, 'application/x-www-form-urlencoded')
      .then( response => {

        if( response.hasOwnProperty('Estado') && response.Estado === "Error"){

          alert("Se rompio todo");

        } else {

          alert("Mascota dada de baja con exito!");

          this.traermascotas();

        }

      });

  }

  traermascotas(){

    location.reload();

  }

}

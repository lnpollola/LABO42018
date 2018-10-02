import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { mascotasService } from '../../servicios/mascotas.service';

import { mascota } from '../../clases/mascota';

@Component({
  selector: 'app-busqueda-mascota',
  templateUrl: './busqueda-mascota.component.html',
  styleUrls: ['./busqueda-mascota.component.css']
})
export class BusquedaMascotaComponent implements OnInit {

	@Output() enviarDato: EventEmitter<any> = new EventEmitter<any>(); //evento (delegado)

	mascotas:Array<mascota>;
	miServicioDemascotas:mascotasService;
	nombre: string;

  constructor( serviciomascotas:mascotasService ) { 

  	this.mascotas = new Array<mascota>();
  	this.miServicioDemascotas = serviciomascotas;

  }

  ngOnInit() {

  	this.mascotas = new Array<mascota>();
  }

  buscar() {
    
    this.miServicioDemascotas.traerUnoPorNombre(this.nombre)
    .then(datos=>{

      this.mascotas = datos;
      console.log(this.mascotas);
      this.enviarDato.emit( this.mascotas )

    });

  }

}

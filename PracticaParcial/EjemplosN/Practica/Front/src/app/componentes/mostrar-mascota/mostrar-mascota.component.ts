import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

import { mascotasService } from '../../servicios/mascotas.service';

import { mascota } from '../../clases/mascota';

@Component({
  selector: 'app-mostrar-mascota',
  templateUrl: './mostrar-mascota.component.html',
  styleUrls: ['./mostrar-mascota.component.css']
})
export class MostrarMascotaComponent implements OnInit {

	@Input() mascotas:Array<mascota>;
  
  constructor() { 

  	this.mascotas = new Array<mascota>();

  }

  ngOnInit() {

  }

}

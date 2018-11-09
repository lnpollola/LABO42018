import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Mascota } from '../../../clases/mascota';
import { MascotasService } from '../../servicios/mascotas.service';


@Component({
  selector: 'app-borrar-boton',
  templateUrl: './borrar-boton.component.html',
  styleUrls: ['./borrar-boton.component.css']
})
export class BorrarBotonComponent implements OnInit {

  @Input() mascota : Mascota;
  @Output() refresh : EventEmitter<any> = new EventEmitter<any>();

  constructor(public masSrv : MascotasService) { }

  ngOnInit() {
    // console.log(this.mascota);
  }

  borrar() {
    //console.log(this.vehiculo);
    this.masSrv.borrar(this.mascota.id_mascota).subscribe(data => {   
      // this.listado = JSON.parse(data._body);
      this.refresh.emit(true);
      data
  });

  
  }

}


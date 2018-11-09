import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Mascota } from '../../../clases/mascota'

@Component({
  selector: 'app-buscar',
  animations: [ routerTransition ],
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  @Input() array : Array<Mascota>;
  buscarModel : string;
  @Output() encontro : EventEmitter<Mascota> = new EventEmitter<Mascota>();

  constructor() { }

  ngOnInit() {
  }

  
  buscar() {
    if(this.buscarModel) {
      let mascota = this.array.find((masc) => {
        return masc.Nombre == this.buscarModel;
      });

      if(mascota) {
        this.encontro.emit(mascota);
      }
    } else {
      this.encontro.emit(null);
    }
    
  }

  getState(outlet) {
    return outlet.activatedRouteData.state;}

}


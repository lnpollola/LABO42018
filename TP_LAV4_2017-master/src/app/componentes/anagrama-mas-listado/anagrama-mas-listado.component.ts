
import { Component, OnInit } from '@angular/core';
import { Juego } from '../../clases/juego';

import { JuegoServiceService } from '../../servicios/juego-service.service';

@Component({
  selector: 'app-anagrama-mas-listado',
  templateUrl: './anagrama-mas-listado.component.html',
  styleUrls: ['./anagrama-mas-listado.component.css']
})
export class AnagramaMasListadoComponent implements OnInit {
  public listadoParaCompartir: any;
  lista:any;

  constructor(public servicioJuego:JuegoServiceService) { }

  ngOnInit() {
    this.listadoParaCompartir = this.servicioJuego.InicializarLista();
    this.lista = JSON.stringify(this.listadoParaCompartir);
  }

  tomarJuegoTerminado(juego: Juego)
  {
    this.listadoParaCompartir.push(juego);
    this.servicioJuego.CargarLista(this.listadoParaCompartir);

    console.log(this.listadoParaCompartir);console.log(this.lista);
  }
}


/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anagrama-mas-listado',
  templateUrl: './anagrama-mas-listado.component.html',
  styleUrls: ['./anagrama-mas-listado.component.css']
})
export class AnagramaMasListadoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
*/

import { Component, OnInit } from '@angular/core';
import { JuegoServiceService } from '../../servicios/juego-service.service';
import { Juego } from '../../clases/juego';

@Component({
  selector: 'app-pptijera-mas-listado',
  templateUrl: './pptijera-mas-listado.component.html',
  styleUrls: ['./pptijera-mas-listado.component.css']
})
export class PPTijeraMasListadoComponent implements OnInit {

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




/*
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pptijera-mas-listado',
  templateUrl: './pptijera-mas-listado.component.html',
  styleUrls: ['./pptijera-mas-listado.component.css']
})
export class PptijeraMasListadoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
*/
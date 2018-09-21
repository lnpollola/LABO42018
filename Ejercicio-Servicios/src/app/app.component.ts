import { Component } from '@angular/core';
import { GenericoService } from './servicios/generico.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EjerciciosClase';

  constructor(private servicio:GenericoService){

  }

  ngOnInit() {
    this.servicio.traerJugadores().subscribe(data=>{console.log(data._body);})



  }





}

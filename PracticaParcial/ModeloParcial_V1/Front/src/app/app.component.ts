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
    //this.servicio.traerJugadores().subscribe(data=>{console.log(JSON.parse(data._body).filter(function(pais){return pais.name == 'Brazil';}));})

    /*
    this.servicio.traerJugadores().subscribe(
        data=>{console.log(JSON.parse(data._body)
          );})

    this.servicio.traerHelados().subscribe(
        data=>{console.log(JSON.parse(data._body)
          );})
*/
    

  
        }




}

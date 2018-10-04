import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { HeladosService } from '../../servicios/heladosService.service';


@Component({
  selector: 'app-boton-borrar',
  templateUrl: './boton-borrar.component.html',
  styleUrls: ['./boton-borrar.component.css']
})
export class BotonBorrarComponent implements OnInit {

  @Input() id:number;

  @Output() vieneBorrar:EventEmitter<any> = new EventEmitter();

  constructor(private httpHelado: HeladosService) { }


  Borrar()
  {
    console.info("Estoy en borrar boton",this.id);
    console.log(this.id);

    this.httpHelado.Borrar(this.id)
    .subscribe();

    this.vieneBorrar.emit(); 
  }


  ngOnInit() {
  }

}



import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { HeladosService } from '../../servicios/heladosService.service';


export interface PeriodicElement {
  id: string;
  sabor: string;
  tipo: string;
  kgrestantes: number;
  funciones : string;
}

@Component({
  selector: 'app-tabla-mat',
  templateUrl: './tabla-mat.component.html',
  styleUrls: ['./tabla-mat.component.css']
})

export class TablaMatComponent implements OnInit {

  @Input('matColumnDef') name: string;
  @Input() sticky: boolean;
  @Input() stickyEnd: boolean;
  @Input() listado:any;

  @Output() heladosEmitter: EventEmitter<any> = new EventEmitter();
  @Output() vieneBorrarMat: EventEmitter<any> =new EventEmitter();

  cssClassFriendlyName: string;
  displayedColumns: string[] = ['id', 'sabor', 'tipo', 'kgrestantes','foto', 'funciones'];
  dataSource:any;
  


  constructor(private _servicio:HeladosService) 
  {
    this.heladosEmitter.emit();
   }

  ngOnInit() {

  }

 
  MuestroSeleccion(Idseleccionado:number)
  {
    console.info("Muestro valor seleccionado",Idseleccionado);
  }

  EmitoBorrarTabla()
  {
    console.log("Estoy en emitoDeTablaMat");
    this.vieneBorrarMat.emit();
  }

  ngOnChanges() 
  {
    console.log("LISTADO cambio ONCH", this.listado);
    this.dataSource = this.listado;
    
    this._servicio.ServiceTraerHelados().subscribe(data => {   
      this.dataSource = JSON.parse(data._body); })
  
  }

}


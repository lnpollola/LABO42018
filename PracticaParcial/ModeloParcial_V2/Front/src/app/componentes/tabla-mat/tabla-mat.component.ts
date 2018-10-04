import { Component, OnInit, Input, Output } from '@angular/core';
import { HeladosService } from '../../servicios/heladosService.service';

export interface PeriodicElement {
  id: string;
  sabor: string;
  tipo: string;
  kgrestantes: number;
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


  cssClassFriendlyName: string;
  displayedColumns: string[] = ['id', 'sabor', 'tipo', 'kgrestantes','foto'];
  listaHelados:any;
  dataSource:any;
  // dataSource = ELEMENT_DATA;
 

  
  constructor(private _servicio:HeladosService) 
  {
    this._servicio.ServiceTraerHelados().subscribe(data => {   
      this.listaHelados = JSON.parse(data._body);
      this.dataSource = this.listaHelados;
    })

   }

  ngOnInit() {
  }

}


import { Component, OnInit } from '@angular/core';
import { HeladosService  } from '../../servicios/heladosService.service';
import {FormsModule} from '@angular/forms';
import {NgForm} from '@angular/forms';
import { Helado } from '../../clases/helado';
import { Observable, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-form-alta',
  templateUrl: './form-alta.component.html',
  styleUrls: ['./form-alta.component.css']
})
export class FormAltaComponent implements OnInit {

  helado:Helado;
  sabor:string;
  tipo:string;
  kilo:number;
  respuesta:any;
  constructor( private miServicioHelados:HeladosService) { }

  GuardarHelado(){
     this.helado = new Helado(this.sabor, this.tipo ,this.kilo);
     this.miServicioHelados.ServiceAltaHelado(this.helado)
     .subscribe()
     ;
    }

  ngOnInit() {
  }

}

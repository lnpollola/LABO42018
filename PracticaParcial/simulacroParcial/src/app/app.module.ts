import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpGenericoService } from './servicios/http-generico.service';
import { ServicioHeladosService } from './servicios/servicio-helados.service';
import { AppComponent } from './app.component';
import { HeladosComponent } from './componentes/helados/helados.component';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {HttpModule} from '@angular/http';
import { BotonBorrarComponent } from './componentes/boton-borrar/boton-borrar.component';
import { FormAltaComponent } from './componentes/form-alta/form-alta.component';
import {FormsModule} from '@angular/forms';
import { BusquedaHeladoComponent } from './componentes/busqueda-helado/busqueda-helado.component';
import { RespuestaBuscarComponent } from './componentes/respuesta-buscar/respuesta-buscar.component';



@NgModule({
  declarations: [
    AppComponent,
    HeladosComponent,
    BotonBorrarComponent,
    FormAltaComponent,
    BusquedaHeladoComponent,
    RespuestaBuscarComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
    
  
  ],
  providers: [HttpGenericoService,
    ServicioHeladosService],
  bootstrap: [AppComponent]
})
export class AppModule { }

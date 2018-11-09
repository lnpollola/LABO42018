import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { MiHttpService } from './servicios/mi-http.service';
import { MascotasService } from './servicios/mascotas.service';

import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { BuscarComponent } from './componentes/buscar/buscar.component';
import {FormControl,FormGroup} from '@angular/forms';
import { BorrarBotonComponent } from './componentes/borrar-boton/borrar-boton.component';
import { DirectivaTiposDirective } from './directivas/directiva-tipos.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    BuscarComponent,
    BorrarBotonComponent,
    DirectivaTiposDirective,
    BrowserAnimationsModule
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    FormsModule
  ],
  providers: [MiHttpService, MascotasService],
  bootstrap: [AppComponent]
})
export class AppModule { }

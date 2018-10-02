import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MiHttpService } from './servicios/mi-http/mi-http.service';
import { PersonasService } from './servicios/personas.service';
import { ListadoPersonasComponent } from './componentes/listado-personas/listado-personas.component';
import { MostrarPersonaComponent } from './componentes/mostrar-persona/mostrar-persona.component'; 


@NgModule({
  declarations: [
    AppComponent,
    ListadoPersonasComponent,
    MostrarPersonaComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [MiHttpService, PersonasService],
  bootstrap: [AppComponent, ]
})
export class AppModule { }

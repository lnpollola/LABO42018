import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MiHttpService } from './servicios/mi-http/mi-http.service';
import { mascotasService } from './servicios/mascotas.service';
import { ListadomascotasComponent } from './componentes/listado-mascotas/listado-mascotas.component';
import { BorrarMascotaComponent } from './componentes/borrar-mascota/borrar-mascota.component';
import { BusquedaMascotaComponent } from './componentes/busqueda-mascota/busqueda-mascota.component';
import { MostrarMascotaComponent } from './componentes/mostrar-mascota/mostrar-mascota.component';
import { PerroGatoDirective } from './directivas/perro-gato.directive'; 


@NgModule({
  declarations: [
    AppComponent,
    ListadomascotasComponent,
    BorrarMascotaComponent,
    BusquedaMascotaComponent,
    MostrarMascotaComponent,
    PerroGatoDirective
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [MiHttpService, mascotasService],
  bootstrap: [AppComponent, ]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import {Observable} from 'rxjs/Observable';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';

//import { HttpClientModule }    from '@angular/common/http';

import { MiHttpService } from './servicios/mi-http.service';
import { GenericoService } from './servicios/generico.service';
import { TemaComponent } from './componentes/tema/tema.component';
import { CuestionarioComponent } from './componentes/cuestionario/cuestionario.component';
import { PreguntaComponent } from './componentes/pregunta/pregunta.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeladosComponent } from './componentes/helados/helados.component';
import { TraerUnHeladoComponent } from './componentes/traer-un-helado/traer-un-helado.component';    


const miRuteo = [{path:'pruebaRuteo', component:TemaComponent},
                 {path:'pruebaParcial', component:HeladosComponent} 
                ]




@NgModule({
  declarations: [
    AppComponent,
    TemaComponent,
    CuestionarioComponent,
    PreguntaComponent,
    HeladosComponent,
    TraerUnHeladoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(miRuteo)

    //HttpClientModule
    
  ],
  providers: [
    MiHttpService,
    GenericoService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

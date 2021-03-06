import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TemaComponent } from './componentes/tema/tema.component';
import { CuestionarioComponent } from './componentes/cuestionario/cuestionario.component';
import { PreguntaComponent } from './componentes/pregunta/pregunta.component';
import { Routes, RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
// import { GenericoService } from './servicios/generico.service'; 
// import { EntidadService } from './servicios/entidad.service'; 


const miRuteo = [
  // Componente por default
  {path:'', component: TemaComponent} //PAGINA DE ERROR

];



@NgModule({
  declarations: [
    AppComponent,
    TemaComponent,
    CuestionarioComponent,
    PreguntaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(miRuteo)
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TemaComponent } from './componentes/tema/tema.component';
import { CuestionarioComponent } from './componentes/cuestionario/cuestionario.component';
import { PreguntaComponent } from './componentes/pregunta/pregunta.component';
import { Routes, RouterModule} from '@angular/router';
// import { AppModule } from '@angular/forms';

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
    RouterModule.forRoot(miRuteo)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

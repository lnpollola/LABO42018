import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BienvenidaComponent } from './componentes/bienvenida/bienvenida.component';
import { LoginComponent } from './componentes/login/login.component';
// RUTEO
import { Routes, RouterModule} from '@angular/router';
import { ErrorComponent } from './componentes/error/error.component';

// RUTEO
//ARRAY DE JSON QUE VA ADENTRO DEL ROUTERMODULE
const miRuteo = [
  {path:'bienvenida', component:BienvenidaComponent},
  {path:'login', component:LoginComponent},
  // Componente por default
  {path:'', component: LoginComponent},
  {path:'**', component: ErrorComponent} //PAGINA DE ERROR

];

@NgModule({
  declarations: [
    AppComponent,
    BienvenidaComponent,
    LoginComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    // RUTEO
    RouterModule.forRoot(miRuteo)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

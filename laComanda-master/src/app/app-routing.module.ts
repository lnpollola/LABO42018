import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { AuthService } from './servicios/auth/auth.service';
import { 
  AuthGuardService as AuthGuard 
} from './servicios/auth/auth-guard.service';
import { ErrorComponent } from './componentes/error/error.component';
import { CocinaComponent } from './componentes/cocina/cocina.component';
import { MozoComponent } from './componentes/mozo/mozo.component';
import { 
  RoleGuardService as RoleGuard 
} from './servicios/auth/role-guard-service.service';
import { AdminComponent } from './componentes/admin/admin.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { BarraComponent } from './componentes/barra/barra.component';
import { ChoperaComponent } from './componentes/chopera/chopera.component';
import { CandyComponent } from './componentes/candy/candy.component';
import { ClienteComponent } from './componentes/cliente/cliente.component';
import { MesasComponent } from './componentes/mesas/mesas.component';
import { EstadisticasComponent } from './componentes/estadisticas/estadisticas.component';


const routes: Routes = [
 {path:"registro", component: RegistroComponent},
 {path:"", component:PrincipalComponent, canActivate:[AuthGuard], children:[

  {path:"admin", component: AdminComponent, canActivate:[RoleGuard],
  data: { 
    expectedRole: 'admin'
  } },
  
  {path:"estadisticas", component: EstadisticasComponent, canActivate:[RoleGuard],
  data: { 
    expectedRole: 'admin'
  } },

  {path:"cocina", component: CocinaComponent},

  {path:"barra", component: BarraComponent},

  {path:"chopera", component: ChoperaComponent},

  {path:"candy", component: CandyComponent},

  {path:"cliente", component: ClienteComponent},

  {path:"mesas", component: MesasComponent},

  {path:"mozo", component: MozoComponent, canActivate:[RoleGuard],
  data: { 
    expectedRole: 'mozo'
  } }
]},
{path: "login", component: LoginComponent},

{path: "error", component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

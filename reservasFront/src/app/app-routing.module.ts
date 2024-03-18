import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RolComponent } from './rol/rol.component';
import { EspacioComponent } from './espacio/espacio.component';
import { PersonaComponent } from './Persona/persona.component';
import { ReservaComponent } from './reserva/reserva.component';

const routes: Routes = [
  {path: 'personas', component: PersonaComponent},
  {path: 'rol', component: RolComponent},
  {path: 'espacios', component: EspacioComponent},
  {path: 'reservas', component: ReservaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

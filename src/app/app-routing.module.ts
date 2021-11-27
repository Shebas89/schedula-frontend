import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './component/error/error.component';
import { FormularioServicioComponent } from './component/formulario-servicio/formulario-servicio.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { ServiciosComponent } from './component/servicios/servicios.component';

const routes: Routes = [
  { path:'servicios', component: ServiciosComponent},
  { path:'error', component: ErrorComponent },
  { path:'formulario-servicio', component: FormularioServicioComponent },
  { path:'**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

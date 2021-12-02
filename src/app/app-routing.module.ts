import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';
import { FormularioServicioComponent } from './components/formulario-servicio/formulario-servicio.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { TabServiciosComponent } from './components/tab-servicios/tab-servicios.component';

const routes: Routes = [
  { path:'servicios', component: ServiciosComponent},
  { path:'error', component: ErrorComponent },
  { path:'formulario-servicio', component: FormularioServicioComponent },
  { path:'tab-servicios', component: TabServiciosComponent },
  { path:'**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

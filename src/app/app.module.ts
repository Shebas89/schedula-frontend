import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { TablaServiciosComponent } from './component/tabla-servicios/tabla-servicios.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { ServiciosComponent } from './component/servicios/servicios.component';
import { HttpClientModule } from '@angular/common/http';
import { ServiciosService } from './services/servicios/servicios.service';
import { ErrorComponent } from './component/error/error.component';
import { FormularioServicioComponent } from './component/formulario-servicio/formulario-servicio.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TablaServiciosComponent,
    NotFoundComponent,
    ServiciosComponent,
    ErrorComponent,
    FormularioServicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ServiciosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
 
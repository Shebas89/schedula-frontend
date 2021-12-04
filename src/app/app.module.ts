import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TablaServiciosComponent } from './components/tabla-servicios/tabla-servicios.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { HttpClientModule } from '@angular/common/http';
import { ServiciosService } from './services/servicios/servicios.service';
import { ErrorComponent } from './components/error/error.component';
import { FormularioServicioComponent } from './components/formulario-servicio/formulario-servicio.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListServiciosComponent } from './components/list-servicios/list-servicios.component';
import { TabServiciosComponent } from './components/tab-servicios/tab-servicios.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { UsuariosService } from './services/usuarios/usuarios.service';
import { HeaderLoginComponent } from './components/header-login/header-login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegistroComponent,
    InicioComponent,
    TablaServiciosComponent,
    NotFoundComponent,
    ServiciosComponent,
    ErrorComponent,
    FormularioServicioComponent,
    ListServiciosComponent,
    TabServiciosComponent,
    HeaderLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [UsuariosService, ServiciosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
 
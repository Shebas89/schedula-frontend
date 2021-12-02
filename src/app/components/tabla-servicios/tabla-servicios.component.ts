import { ThisReceiver } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { async } from '@angular/core/testing';
import { Router } from '@angular/router';
import { ServicioModel } from 'src/app/models/servicio';
import { ServiciosService } from 'src/app/services/servicios/servicios.service';

@Component({
  selector: 'app-tabla-servicios',
  templateUrl: './tabla-servicios.component.html',
  styleUrls: ['./tabla-servicios.component.scss']
})
export class TablaServiciosComponent implements OnInit {

  @Output() mostrarAlerta = new EventEmitter();

  public servicios: ServicioModel[] = [];

  constructor(private servicesServicios: ServiciosService, private router: Router) { }

  async ngOnInit(): Promise<void> {
    this.servicios = await this.getServices();
    console.log(this.servicios)
  }

  public async getServices(): Promise<any>{
    try{
      const response = await this.servicesServicios.obtenerServicios();
      return response.datos;
    }catch(error){
      this.router.navigate(['/error'])
    }
  }

  public deleteService( id: number ){
    this.servicesServicios.inactivarServicio(id).then( async (response) => {
      if (response.message == 'deleted')
        this.servicios = await this.getServices();
        this.mostrarAlerta.emit(true);
    }).catch(error => {
      this.router.navigate(['/error'])
    })
  }

  public actualizarServicio(servicio: ServicioModel){
    localStorage.setItem('actualizarServicio', JSON.stringify(servicio));
    this.router.navigate(['/formulario-servicio']);
  }
}

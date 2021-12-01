import { ThisReceiver } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { async } from '@angular/core/testing';
import { Router } from '@angular/router';
import { CategoryServiceModel, ServicioModel } from 'src/app/models/servicio';
import { ServiciosService } from 'src/app/services/servicios/servicios.service';

@Component({
  selector: 'app-list-servicios',
  templateUrl: './list-servicios.component.html',
  styleUrls: ['./list-servicios.component.scss']
})
export class ListServiciosComponent implements OnInit {

  @Input() categoria_padre: CategoryServiceModel | null = null;
  public servicios: ServicioModel[] = [];
  public categoria_pad: String | undefined = "";
  @Output() mostrarAlerta = new EventEmitter();

  constructor( private servicesServicios: ServiciosService, private router: Router ) { }

  async ngOnInit(): Promise<void> {    
    this.servicios = await this.getServices();
    console.log(this.servicios);
    console.log(this.categoria_padre);
    this.categoria_pad = this.categoria_padre?.categoria_servicio;
  }

  public async getServices(): Promise<any>{
    try{
      const response = await this.servicesServicios.obtenerServicios();
      return response.datos;
    }catch(error){
      this.router.navigate(['/error']);
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

  public getServicesFilter(){
    if ( !this.categoria_padre ){
      return this.servicios;
    }

    return this.servicios.filter((servicio) => this.categoria_padre?.categoria_servicio === servicio.categoria);
  }
}

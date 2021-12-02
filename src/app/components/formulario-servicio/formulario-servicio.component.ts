import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicioModel } from 'src/app/models/servicio';
import { ServiciosService } from 'src/app/services/servicios/servicios.service';

@Component({
  selector: 'app-formulario-servicio',
  templateUrl: './formulario-servicio.component.html',
  styleUrls: ['./formulario-servicio.component.scss']
})
export class FormularioServicioComponent implements OnInit {

  public formServicios: FormGroup = new FormGroup( {} );
  public actualizarServicio:ServicioModel | null = null;

  constructor( private fromBuilder: FormBuilder, private serviciosService: ServiciosService, private router: Router ) { }

  ngOnInit(): void {
    const actualizar = localStorage.getItem('actualizarServicio');
    this.actualizarServicio = actualizar ? JSON.parse(actualizar) : null;
    this.buildForm();
  }

  private buildForm(){
    this.formServicios = this.fromBuilder.group({
      nombre: [ this.actualizarServicio?.nombre, Validators.required],
      descripcion: [ this.actualizarServicio?.descripcion, Validators.required],
      categoria: [ this.actualizarServicio?.categoria, Validators.required],
      duracion: [ this.actualizarServicio?.duracion, Validators.required],
      precio: [ this.actualizarServicio?.precio, Validators.required],
      empleado: [ this.actualizarServicio?.empleado, Validators.required],
      id_empresa: [1]
    });
  }

  public servicioAgregar(){
    console.log(this.formServicios.value);
    this.serviciosService.agregarServicio(this.formServicios.value).then( response => {
      alert('Cancion creada correctamente');
      this.router.navigate(['/servicios']);
    }).catch( error => {
      this.router.navigate(['/error']);
    });
  }

  public servicioActualizar(){
    const servicio: ServicioModel = {
      id: this.actualizarServicio?.id,
      ...this.formServicios.value
    };
    console.log(servicio);
    this.serviciosService.actualizarServicio(servicio).then( response => {
      if (response.message == 'updated'){
        alert('Servicio Actualizado');
        localStorage.removeItem('actualizarServicio');
        this.router.navigate(['/servicios']);
      }
    }).catch( error => {
      this.router.navigate(['/error'])
    })
  }
}

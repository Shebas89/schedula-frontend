import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { ServicioModel } from 'src/app/models/servicio';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  constructor(private http:HttpClient) { }

  public obtenerServicios(): Promise<any>{
    const url = `${environment.apiUrl}/obtenerServicios`;
    return this.http.get(url).toPromise();
  }

  public obtenerServicio( id: number ){}

  public actualizarServicio( servicio: ServicioModel ): Promise<any>{
    const url = `${environment.apiUrl}/actualizarServicio/${servicio.id}`
    return this.http.put(url,servicio).toPromise();
  }

  public eliminarServicio( id: number ): Promise<any>{
    const url = `${environment.apiUrl}/eliminarServici/${id}`
    return this.http.delete(url).toPromise();
  }

  public agregarServicio( servicio: ServicioModel ): Promise<any>{
    const url = `${environment.apiUrl}/agregarservicio`;
    return this.http.post(url, servicio).toPromise();
  }

  public inactivarServicio( id: number ): Promise<any>{
    const url = `${environment.apiUrl}/inactivarServicio/${id}`
    return this.http.put(url,{}).toPromise();
  }

  public obtenerCategoriasServicios(): Promise<any>{
    const url = `${environment.apiUrl}/obtenerCategoriasServicio`;
    return this.http.get(url).toPromise();
  }
}

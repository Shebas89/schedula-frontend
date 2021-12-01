import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryServiceModel } from 'src/app/models/servicio';
import { ServiciosService } from 'src/app/services/servicios/servicios.service';

@Component({
  selector: 'app-tab-servicios',
  templateUrl: './tab-servicios.component.html',
  styleUrls: ['./tab-servicios.component.scss']
})
export class TabServiciosComponent implements OnInit {

  public categorias: CategoryServiceModel[] = []; 
  public categoria_padre:CategoryServiceModel | null = null;

  constructor( private servicesServicios: ServiciosService, private router: Router ) { }

  async ngOnInit(): Promise<void> {
    this.categorias = await this.getcategories();
    console.log(this.categorias);
  }

  public setCategoryFather(category: CategoryServiceModel){
    console.log(category)
    this.categoria_padre = category;
  }


  public async getcategories(): Promise<any>{
    try{
      const response = await this.servicesServicios.obtenerCategoriasServicios();
      return response.datos;
    }catch(error){
      this.router.navigate(['/error']);
    }
  }
}

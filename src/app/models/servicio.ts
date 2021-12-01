
export interface ServicioModel {
  id: number,
  nombre: string,
  categoria: string,
  descripcion: string,
  duracion: number,
  precio: number,
  empresa: string,
  empleado: string
}

export interface CategoryServiceModel {
  categoria_servicio: string
}

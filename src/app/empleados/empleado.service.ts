import { Injectable } from '@angular/core';
import { iEmpleado } from './interfaces/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  private _empleados: iEmpleado[] = []

  //Creamos un metodo get par aacceder a la lista.
  get Empleados(): iEmpleado[] {
    return this._empleados;
  }

  //Método para agregar un nuevo cliente a la lista
  agregarEmpleado(empleado: iEmpleado) {
    this._empleados.push(empleado);

    localStorage.setItem('Empleado', JSON.stringify(this._empleados));

  }
  eliminarEmpleado(id: number) {
    const indece = this._empleados.findIndex(empleado =>
      empleado.id === id
    );
    if ( indece !== -1){
      this._empleados.splice(indece,1);
    }
    localStorage.setItem('Empleado', JSON.stringify(this._empleados));

  }

 
  constructor() {
    //Recuperamos del localStorage los clientes previos
    this._empleados = JSON.parse(localStorage.getItem('Empleado')!) || [];
  }
}

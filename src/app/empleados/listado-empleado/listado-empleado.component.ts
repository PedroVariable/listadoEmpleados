import { Component } from '@angular/core';
import { EmpleadoService } from '../empleado.service';
import { iEmpleado } from '../interfaces/empleado';

@Component({
  selector: 'app-listado-empleado',
  templateUrl: './listado-empleado.component.html',
  styleUrl: './listado-empleado.component.css'
})
export class ListadoEmpleadoComponent {
constructor(private EmpleadoService: EmpleadoService){}
get Empleados(): iEmpleado[]{
  return this.EmpleadoService.Empleados;
}
eliminar(empleado: iEmpleado){
  this.EmpleadoService.eliminarEmpleado(empleado.id);
}

}

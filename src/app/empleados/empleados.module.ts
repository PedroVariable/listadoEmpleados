import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewEmpleadoComponent } from './new-empleado/new-empleado.component';
import { ListadoEmpleadoComponent } from './listado-empleado/listado-empleado.component';
import { GeneralEmpleadosComponent } from './general-empleados/general-empleados.component';
import { EmpleadoService } from './empleado.service';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NewEmpleadoComponent,
    ListadoEmpleadoComponent,
    GeneralEmpleadosComponent
  ],
  imports: [
    CommonModule,FormsModule
  ],
  exports:[
    NewEmpleadoComponent, ListadoEmpleadoComponent, GeneralEmpleadosComponent
  ],
  providers:[
    EmpleadoService
  ] 
})
export class EmpleadosModule { }

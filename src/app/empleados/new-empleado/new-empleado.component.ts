import { Component } from '@angular/core';
import { EmpleadoService } from '../empleado.service';
import { iEmpleado } from '../interfaces/empleado';

@Component({
  selector: 'app-new-empleado',
  templateUrl: './new-empleado.component.html',
  styleUrl: './new-empleado.component.css'
})
export class NewEmpleadoComponent {
  newEmpleado: iEmpleado = {
    id: 0,
    nombre: "",
    correo: "",
    telefono: 0,
    fechaNacimiento: new Date(),
    sexo: ""
  }
  constructor(private EmpleadoService: EmpleadoService){}
  
  agregar() {
    // Validación del nombre
    if (this.newEmpleado.nombre === "") {
      alert("Ingresa un nombre!");
      return;
    }

    // Validación del correo electrónico
    if (this.newEmpleado.correo === "" || !this.newEmpleado.correo.includes('@')) {
      alert("Ingresa un correo electrónico válido!");
      return;
    }

    // Validación del número telefónico
    if (this.newEmpleado.telefono === 0) {
      alert("Ingresa un número telefónico!");
      return;
    }


    // Validación del sexo
    if (this.newEmpleado.sexo === "" || (this.newEmpleado.sexo !== "M" && this.newEmpleado.sexo !== "F")) {
      alert("Ingresa un sexo válido (M o F)!");
      return;
    }

      //Emitimos un nuevo evento tipo onNuevoCliente
      //this.onNuevoCliente.emit(this.nuevo);
      
      //Agregaremos un nuevo cliente
      this.EmpleadoService.agregarEmpleado(this.newEmpleado);

      this.newEmpleado = {
        id: 0,
        nombre: "",
        correo: "",
        telefono: 0,
        fechaNacimiento: new Date(),
        sexo: ""
      }
    } 
}

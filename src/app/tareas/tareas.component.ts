import { Component, Input } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';


@Component({
  selector: 'app-tareas',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './tareas.component.html',
  styleUrl: './tareas.component.css'
})
export class TareasComponent {
  nombreUsuario: string = "Franz Pfeiffer Guillén";
  tareas: string[] = ["ejemplo tarea"];
  nuevaTarea: string = "";

  agregarTarea() {
      this.tareas.push(this.nuevaTarea);
      this.nuevaTarea = "";
    }
}

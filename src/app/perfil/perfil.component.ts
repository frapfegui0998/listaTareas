import { Component } from '@angular/core';


@Component({
  selector: 'app-perfil',
  imports: [],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent {
  nombreUsuario: string = "Franz Pfeiffer Guillén";
  pais: string = "Costa Rica"
  edad: number = 26
}

import { Component } from '@angular/core';


@Component({
  selector: 'app-inicio',
  imports: [],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  nombreUsuario = ""
  actualizarNombre(evento: Event) {
    const input = evento.target as HTMLInputElement;
    this.nombreUsuario = input.value;
    }
}

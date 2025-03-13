import { Component } from '@angular/core';
import { SeparadorComponent } from "../separador/separador.component";

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [SeparadorComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {

}

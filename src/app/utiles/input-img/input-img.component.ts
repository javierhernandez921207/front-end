import { Component, EventEmitter, Input, Output } from '@angular/core';
import { toBase64 } from '../helpers';

@Component({
  selector: 'app-input-img',
  templateUrl: './input-img.component.html',
  styleUrls: ['./input-img.component.css']
})
export class InputImgComponent {
  imageBase64?: string;  
  @Input() urlImagenActual?: string;
  @Output() archivoSeleccionado: EventEmitter<File> = new EventEmitter<File>();

  change(event: any) {
    if (event.target.files.length > 0) {
      const file: File = event.target.files[0];
      toBase64(file).then((value) => this.imageBase64 = String(value)).catch(error => console.log(error));
      this.archivoSeleccionado.emit(file);
      this.urlImagenActual = undefined;
    }
  }
}

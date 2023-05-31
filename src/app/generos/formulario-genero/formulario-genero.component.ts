import { Component, EventEmitter, Output, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { primeraLetraMayuscula } from 'src/app/utiles/validaciones/primeraLetraMayuscula';
import { generoCreacionDTO } from '../genero';

@Component({
  selector: 'app-formulario-genero',
  templateUrl: './formulario-genero.component.html',
  styleUrls: ['./formulario-genero.component.css']
})
export class FormularioGeneroComponent {
  router: any;
  form!: FormGroup;

  @Input() modelo: generoCreacionDTO = { nombre: '' };
  @Output() onSubmit: EventEmitter<generoCreacionDTO> = new EventEmitter<generoCreacionDTO>();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: ['', {
        validators: [Validators.required, Validators.minLength(3), primeraLetraMayuscula()]
      }]
    });

    if (this.modelo !== undefined)
      this.form.patchValue(this.modelo);
  }

  obtenerErrorCampoNombre() {
    var campo = this.form.get('nombre');
    if (campo?.hasError('required')) {
      return "El nombre es requerido";
    }
    if (campo?.hasError('minlength')) {
      return "La longitud minima es 3"
    }
    if (campo?.hasError('primeraLetraMayuscula'))
      return campo.getError('primeraLetraMayuscula').mensaje
    else {
      return "";
    }
  }

  guardarCambios(): void {
    this.onSubmit.emit(this.form.value);
  }
}

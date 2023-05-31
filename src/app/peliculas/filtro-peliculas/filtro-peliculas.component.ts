import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filtro-peliculas',
  templateUrl: './filtro-peliculas.component.html',
  styleUrls: ['./filtro-peliculas.component.css']
})
export class FiltroPeliculasComponent implements OnInit {

  form!: FormGroup;

  peliculas!: {
    titulo: string;
    fecha: Date;
    precio: number;
    poster: string,
    enCines: boolean,
    proximosEstrenos: boolean,
    generos: Array<number>
  }[];

  peliculasOriginal: any;

  formularioOriginal = {
    titulo: '',
    generoId: 0,
    proximosEstrenos: false,
    enCines: false
  };

  generos = [
    { id: 1, nombre: 'Drama' },
    { id: 2, nombre: 'Acción' },
    { id: 3, nombre: 'Comedia' }
  ]

  constructor(private formBuilder: FormBuilder, private location: Location, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group(this.formularioOriginal);
    
    this.peliculas = [
      {
        titulo: "Spider-Man",
        fecha: new Date(),
        precio: 1400.99,
        poster: "",
        enCines: false,
        proximosEstrenos: true,
        generos: [2, 3]
      },
      {
        titulo: "Moana",
        fecha: new Date(),
        precio: 1400.99,
        poster: "",
        enCines: true,
        proximosEstrenos: false,
        generos: [1]
      }
    ];

    this.peliculasOriginal = this.peliculas;

    this.leerParametros();
    this.buscarPeliculas(this.form.value);

    this.form.valueChanges.subscribe(valor => {
      this.peliculas = this.peliculasOriginal;
      this.buscarPeliculas(valor);
      this.escribirParametros();
    });
  }

  limpiar() {
    this.form.patchValue(this.formularioOriginal);
  }

  buscarPeliculas(valor: any) {
    if (valor.titulo) {
      this.peliculas = this.peliculas.filter(p => p.titulo.indexOf(valor.titulo) !== -1);
    }

    if(valor.generoId !== 0){
      this.peliculas = this.peliculas.filter(p => p.generos.indexOf(valor.generoId) !== -1);
    }

    if(valor.proximosEstrenos){
      this.peliculas = this.peliculas.filter(p => p.proximosEstrenos);
    }

    if(valor.enCines){
      this.peliculas = this.peliculas.filter(p => p.enCines);
    }
  }

  private escribirParametros(){
    var queryString = [];
    var valoresFormulario = this.form.value;
    if(valoresFormulario.titulo){
      queryString.push(`titulo=${valoresFormulario.titulo}`);
    }
    if(valoresFormulario.generoId !== 0){
      queryString.push(`generoId=${valoresFormulario.generoId}`);
    }
    if(valoresFormulario.proximosEstrenos){
      queryString.push(`proximosEstrenos=${valoresFormulario.proximosEstrenos}`);
    }
    if(valoresFormulario.enCines){
      queryString.push(`enCines=${valoresFormulario.enCines}`);
    }
    this.location.replaceState('peliculas/buscar', queryString.join('&'))
  }

  private leerParametros(){
    this.activatedRoute.queryParams.subscribe(params => {
      var obj: any = {}; 
      if(params['titulo']){
        obj.titulo = params['titulo'];
      }
      if(params['generoId']){
        obj.generoId = Number(params['generoId']);
      }
      if(params['proximosEstrenos']){
        obj.proximosEstrenos = params['proximosEstrenos'];
      }
      if(params['enCines']){
        obj.enCines = params['enCines'];
      }
      this.form.patchValue(obj);
    });
  }

}

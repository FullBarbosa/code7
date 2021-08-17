import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Filmes } from 'src/app/interface/filmes';
import { ToastrService } from 'ngx-toastr';

import { FilmesService } from '../../service/filmes.service';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  public formulario!: FormGroup;
  get nome(): any {
    return this.formulario.get('nome');
  }
  get ano(): any {
    return this.formulario.get('ano');
  }
  get diretor(): any {
    return this.formulario.get('diretor');
  }
  get genero(): any {
    return this.formulario.get('genero');
  }
  get descricao(): any {
    return this.formulario.get('descricao');
  }
  get poster(): any {
    return this.formulario.get('poster');
  }

  constructor(
    private formBuilder: FormBuilder,
    private services: FilmesService,
    private toastr: ToastrService
  ) {}

  filme!: Filmes;

  ngOnInit(): void {
    this.configurarFormulario();
  }
  configurarFormulario() {
    this.formulario = this.formBuilder.group({
      nome: [null, Validators.required],
      ano: [null, Validators.required],
      diretor: [null, Validators.required],
      genero: [null, Validators.required],
      descricao: [null, Validators.required],
      poster: [null, Validators.required],
    });
  }
  submit() {
    if (this.formulario.valid) {
      this.filme = {
        nome: this.nome.value,
        ano: new Date(this.ano.value),
        descricao: this.descricao.value,
        diretor: this.diretor.value,
        genero: this.genero.value,
        poster: this.poster.value,
      };

      this.services.create(this.filme).subscribe((retorno: Filmes) => {
        const msg = 'CADASTRO COM SUCESSO';
        this.toastr.success(msg, 'ERROR');
      });
    } else {
      const msg = 'PREENCHA TODOS OS CAMPOS';
      this.toastr.error(msg, 'ERROR');
    }
  }
}

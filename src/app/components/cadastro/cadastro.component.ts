import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { iPedagogo } from 'src/app/interfaces/iPedagogo';
import { PedagogoService } from 'src/app/services/pedagogo.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent {
  cadastroForm: FormGroup;

  constructor(
    private router: Router,
    private pedagogoService: PedagogoService
  ) {
    this.cadastroForm = new FormGroup({
      nome: new FormControl('', [Validators.required]),
      telefone: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]{11}$'),
      ]),
      dataNascimento: new FormControl('', [Validators.required]),
      cpf: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]{11}$'),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      senha: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
      confirmacaoSenha: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }

  async onSubmit() {
    const pedagogo: iPedagogo = {
      nome: this.cadastroForm.get('nome')?.value,
      telefone: this.cadastroForm.get('telefone')?.value,
      dataNascimento: new Date(this.cadastroForm.get('dataNascimento')?.value),
      cpf: this.cadastroForm.get('cpf')?.value,
      email: this.cadastroForm.get('email')?.value,
      senha: this.cadastroForm.get('senha')?.value,
    };
    await this.pedagogoService.cadastrarPedagogo(pedagogo);
    this.router.navigate(['login']);
  }
}

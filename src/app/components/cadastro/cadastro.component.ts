import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  cadastroForm: FormGroup;

  constructor(){
    this.cadastroForm = new FormGroup({
      email: new FormControl('',[ Validators.email, Validators.required]),
      senha: new FormControl('', [Validators.required, Validators.minLength(8)],)
    });
  }

  onSubmit(){
    console.log(this.cadastroForm.value)
  }
}

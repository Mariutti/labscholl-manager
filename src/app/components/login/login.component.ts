import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private authService: AuthService, private router: Router) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      senha: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }

  async onSubmit() {
    try {
      await this.authService.login(
        this.loginForm.get('email')?.value,
        this.loginForm.get('senha')?.value
      );
      this.router.navigate(['/labschool/alunos']);
    } catch (e) {
      alert('Credenciais inválidas!');
    }
  }
}

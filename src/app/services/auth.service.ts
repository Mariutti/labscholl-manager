import { Injectable } from '@angular/core';
import { PedagogoService } from './pedagogo.service';
import { iPedagogo } from '../interfaces/iPedagogo';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private pedagogoLogado: iPedagogo | undefined;

  constructor(private pedagogoService: PedagogoService) {}

  async login(email: string, senha: string) {
    const pedagogos = await this.pedagogoService.obterPedagogos();
    for (const pedagogo of pedagogos) {
      const emailCorreto = email === pedagogo.email;
      const senhaCorreta = senha === pedagogo.senha;

      if (emailCorreto && senhaCorreta) this.pedagogoLogado = pedagogo;
      return;
    }
    throw new Error('Credenciais inválidas!');
  }

  obterNomePedagogoLogado(){
    return this.pedagogoLogado?.nome;
  }
}

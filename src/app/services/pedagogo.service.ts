import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { iPedagogo } from '../interfaces/iPedagogo';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PedagogoService {
  constructor(private httpClient: HttpClient) {}

  async cadastrarPedagogo(pedagogo: iPedagogo) {
    try {
      await lastValueFrom(
        this.httpClient.post('http://localhost:3000/pedagogos', pedagogo)
      );
    } catch (error) {
      throw new Error('Erro ao cadastrar pedagogo.');
    }
  }
}

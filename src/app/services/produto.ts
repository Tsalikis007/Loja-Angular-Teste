import { Injectable } from '@angular/core';
import { Produto } from '../models/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private produtos: Produto[] = [
    { id: 1, nome: 'Mouse Gamer', preco: 150,  imagem: 'Mouse.svg' },
    { id: 2, nome: 'Teclado Mecânico', preco: 300, imagem: 'Teclado.svg' },
    { id: 3, nome: 'Headset', preco: 250, imagem: 'Headset.svg' },
    { id: 4, nome: 'Mouse', preco: 150,  imagem: 'Mouse.svg' },
    { id: 5, nome: 'Teclado', preco: 300, imagem: 'Teclado.svg' },
    { id: 6, nome: 'Headst', preco: 250, imagem: 'Headset.svg' }
  ];

  getProdutos(): Produto[] {
    return this.produtos;
  }
}

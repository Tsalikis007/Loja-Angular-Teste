import { Injectable } from '@angular/core';
import { Produto } from '../models/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private produtos: Produto[] = [
    { id: 1, nome: 'Mouse Gamer', preco: 150,  imagem: 'Mouse.jpg' },
    { id: 2, nome: 'Teclado Mecânico', preco: 300, imagem: 'Teclado.jpg' },
    { id: 3, nome: 'Headset', preco: 250, imagem: '../assets/Headset.jpg' }
  ];

  getProdutos(): Produto[] {
    return this.produtos;
  }
}

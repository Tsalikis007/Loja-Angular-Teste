import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoService } from '../../services/produto';
import { Produto } from '../../models/produto';

@Component({
  selector: 'app-scroller',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './scroller.html',
  styleUrls: ['./scroller.css']
})
export class ScrollerComponent implements OnInit {
  produtos: Produto[] = [];

  constructor(private produtoService: ProdutoService) {}

  ngOnInit() {
    this.produtos = this.produtoService.getProdutos().slice(0, 6);
  }
}

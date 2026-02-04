import { Component } from '@angular/core';
import { ProdutosComponent } from '../app/components/produtos/produtos';
import { Header } from '../app/components/header/header';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, ProdutosComponent],
  templateUrl: './app.html'
})
export class App {}

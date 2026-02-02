import { Component } from '@angular/core';
import { ProdutosComponent } from '../app/components/produtos/produtos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProdutosComponent],
  templateUrl: './app.html'
})
export class App {}

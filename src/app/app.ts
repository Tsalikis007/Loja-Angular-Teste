import { Component } from '@angular/core';
import { ProdutosComponent } from '../app/components/produtos/produtos';
import { HeaderComponent } from '../app/components/header/header';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, ProdutosComponent],
  templateUrl: './app.html'
})
export class App {}

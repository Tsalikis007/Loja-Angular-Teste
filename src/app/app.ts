import { Component } from '@angular/core';
import { ProdutosComponent } from '../app/components/produtos/produtos';
import { Header } from '../app/components/header/header';
import { ScrollerComponent } from './components/scroller/scroller';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, ProdutosComponent, ScrollerComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {}

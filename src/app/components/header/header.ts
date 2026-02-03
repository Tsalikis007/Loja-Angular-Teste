import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styles: [
    
  ]
})
export class Header {
  menuOpen = false;
  cartCount = 0;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}


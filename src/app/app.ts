import { Component, inject, OnInit, signal } from '@angular/core';
import { Header } from './components/header/header';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [Header, RouterOutlet],
  styleUrl: './app.scss',
})
export class App implements OnInit {
  protected readonly title = signal('alextcw-portfolio');
  private router = inject(Router);

  ngOnInit(): void {
    this.onComponentChange('home');
  }

  onComponentChange(component: string) {
    this.router.navigateByUrl(`/${component}`).then(() => null);
  }
}

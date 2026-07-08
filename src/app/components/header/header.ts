import { Component, inject, output } from '@angular/core';
import { ToogleLang } from '../../shared/components/toogle-lang/toogle-lang';
import { TranslocoModule } from '@jsverse/transloco';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { DomSanitizer } from '@angular/platform-browser';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

@Component({
  selector: 'app-header',
  imports: [ToogleLang, TranslocoModule, MatButtonModule, MatIconModule, MatButtonToggleModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  public selectedComponent = output<string>();

  constructor() {
    const iconRegistry = inject(MatIconRegistry);
    const sanitizer = inject(DomSanitizer);
    const customIcons = [
      { name: 'facebook', url: '/icons/Facebook.svg' },
      { name: 'github', url: '/icons/github.svg' },
      { name: 'linkedin', url: '/icons/linkedin.svg' },
    ];
    customIcons.forEach((icon) => {
      iconRegistry.addSvgIcon(icon.name, sanitizer.bypassSecurityTrustResourceUrl(icon.url));
    });
  }

  onComponentSelect(route: string) {
    this.selectedComponent.emit(route);
  }

  goToRoute(route: string) {
    window.open(route, '_blank', 'noopener,noreferrer');
  }
}

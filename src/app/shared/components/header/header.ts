import { Component, inject, output } from '@angular/core';
import { ToogleLang } from '../toogle-lang/toogle-lang';
import { TranslocoModule } from '@jsverse/transloco';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { CustomRouterService } from '../../../services/custom-router-service';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [
    ToogleLang,
    TranslocoModule,
    MatButtonModule,
    MatIconModule,
    MatButtonToggleModule,
    NgOptimizedImage,
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  protected linkedinImageSrc: string = 'icons/linkedin.svg';
  protected whatsappImageSrc: string = 'icons/WhatsApp.svg';
  protected emailImageSrc: string = 'icons/mail.svg';

  public selectedComponent = output<string>();
  readonly router = inject(CustomRouterService);

  onComponentSelect(route: string): void {
    this.selectedComponent.emit(route);
  }
}

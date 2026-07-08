import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { TranslocoModule } from '@jsverse/transloco';
import { NgOptimizedImage } from '@angular/common';
import { CustomRouterService } from '../../services/custom-router-service';

@Component({
  selector: 'app-contact',
  imports: [MatCardModule, MatButtonModule, TranslocoModule, NgOptimizedImage],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  readonly router = inject(CustomRouterService);

  protected linkedinImageSrc: string = 'icons/linkedin.svg';
  protected githubImageSrc: string = 'icons/github.svg';
  protected whatsappImageSrc: string = 'icons/WhatsApp.svg';
  protected emailImageSrc: string = 'icons/mail.svg';
}

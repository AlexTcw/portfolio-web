import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { TranslocoModule } from '@jsverse/transloco';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [MatCardModule, MatButtonModule, TranslocoModule, NgOptimizedImage],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  protected linkedinImageSrc: string = 'icons/linkedin.svg';
  protected facebookImageSrc: string = 'icons/Facebook.svg';
  protected githubImageSrc: string = 'icons/github.svg';

  goToRoute(route: string) {
    window.open(route, '_blank', 'noopener,noreferrer');
  }
}

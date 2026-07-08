import { Component, computed, inject} from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { TranslocoModule } from '@jsverse/transloco';
import { NgOptimizedImage } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { CustomTranslateService } from '../../services/custom-translate-service';
import { Card } from '../../services/card';
import { toSignal } from '@angular/core/rxjs-interop';
import { ImgCarousel } from '../../shared/components/img-carousel/img-carousel';
import { Badges } from '../../shared/components/badges/badges';

@Component({
  selector: 'app-home',
  imports: [
    NgOptimizedImage,
    MatCardModule,
    MatButtonModule,
    TranslocoModule,
    MatButtonModule,
    NgOptimizedImage,
    MatIconModule,
    ImgCarousel,
    Badges,
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  protected profileImageSrc: string = 'img/profile.webp';
  readonly translateService = inject(CustomTranslateService);
  readonly cardService = inject(Card);
  private allProjects = toSignal(this.cardService.getProjects(), { initialValue: [] });
  public featuredProject = computed(() => {
    return this.allProjects().find((project) => project.id === 4);
  });
  protected readonly String = String;
}

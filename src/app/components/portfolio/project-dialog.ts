import { Component, inject} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { ProjectCardEntity } from '../../model/project-card.entity';
import { MatCardModule } from '@angular/material/card';
import { CustomTranslateService } from '../../services/custom-translate-service';
import { TranslocoModule } from '@jsverse/transloco';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ToogleLang } from '../../shared/components/toogle-lang/toogle-lang';
import { Badges } from '../../shared/components/badges/badges';
import { ImgCarousel } from '../../shared/components/img-carousel/img-carousel';

@Component({
  selector: 'app-project-dialog',
  imports: [
    MatCardModule,
    TranslocoModule,
    MatChipsModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    ToogleLang,
    Badges,
    ImgCarousel,
  ],
  template: ` <mat-card>
    <header id="mat-card-header">
      <app-toogle-lang></app-toogle-lang>
      <h2>{{ this.translateService.getTranslateText(this.data.name) }}</h2>
      <button matIconButton mat-dialog-close><mat-icon>close</mat-icon></button>
    </header>
    <mat-card-content>
      <article id="img-carousel">
        <app-img-carousel [projectId]="data.id"></app-img-carousel>
      </article>
      <article>
        <h3>{{ 'dialog.title' | transloco }}</h3>
        <p>
          {{ this.translateService.getTranslateText(this.data.details.detailedDescription) }}
          {{ 'dialog.legend' | transloco }}: <a>{{ 'dialog.link' | transloco }}</a>
        </p>
      </article>
    </mat-card-content>
    <mat-card-footer>
      <app-badges [currentProject]="this.data"></app-badges>
    </mat-card-footer>
  </mat-card>`,
  styles: `
    mat-card {
      width: 100%;
      height: 100%;
      padding: 2rem;

      #mat-card-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      mat-card-content {
        #img-carousel {
          display: flex;
          justify-content: center;

          app-img-carousel {
            transform: scale(0.8);
            transform-origin: top center;
          }
        }
      }

      mat-card-footer {
        margin-top: auto;
      }

      button {
        color: white !important;
      }
    }
  `,
})
export class ProjectDialogComponent {
  readonly data = inject<ProjectCardEntity>(MAT_DIALOG_DATA);
  readonly translateService = inject(CustomTranslateService);
  readonly dialogRef = inject(MatDialogRef<ProjectDialogComponent>);
}

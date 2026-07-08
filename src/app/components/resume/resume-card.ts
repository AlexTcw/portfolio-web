import { Component, inject, input } from '@angular/core';
import { ResumeDetails} from '../../model/resume.entity';
import { MatCardModule } from '@angular/material/card';
import { CustomTranslateService } from '../../services/custom-translate-service';
import { NgOptimizedImage } from '@angular/common';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-resume-card',
  imports: [MatCardModule, NgOptimizedImage],
  template: `
    <mat-card>
      <aside id="img-container">
        <img
          [ngSrc]="getImage(data()?.img)"
          width="80"
          height="80"
          priority="true"
          [alt]="data()?.title"
        />
      </aside>
      <main id="main-container">
        <h1>{{ translateService.getTranslateText(data()?.title) }}</h1>
        <a [href]="data()?.link" target="_blank">
          <h3>{{ translateService.getTranslateText(data()?.subtitle) }}</h3>
        </a>
        <p>{{ translateService.getTranslateText(data()?.legend) }}</p>
      </main>
    </mat-card>
  `,
  styles: `
    #img-container {
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 0.5rem;

      img {
        border-radius: 50%;
      }
    }

    #main-container {
      margin-left: 1rem;
    }

    mat-card {
      height: 100%;
      padding: 1rem;
      background-color: #424b5b;
      display: flex;
      flex-direction: row;
      align-items: center;
      text-align: justify;
      line-height: 1.2;
      a {
        color: #8888f1;
      }

      @media (max-width: 768px) {
        font-size: smaller;
      }
    }
  `,
  standalone: true,
})
export class ResumeCard {
  public data = input<ResumeDetails>();
  readonly translateService = inject(CustomTranslateService);
  protected readonly imgPath: string = environment.SKILLS;

  public getImage(id: number | undefined): string {
    return `${this.imgPath}${id}.webp`;
  }
}

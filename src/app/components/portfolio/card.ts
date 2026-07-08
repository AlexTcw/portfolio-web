import { Component, inject, input } from '@angular/core';
import { ProjectCardEntity } from '../../model/project-card.entity';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { TranslocoModule } from '@jsverse/transloco';
import { MatChipsModule } from '@angular/material/chips';
import {
  MatDialog,
} from '@angular/material/dialog';
import { ProjectDialogComponent } from './project-dialog';
import { CustomTranslateService } from '../../services/custom-translate-service';
import { Badges } from '../../shared/components/badges/badges';

@Component({
  selector: 'app-card',
  imports: [MatButtonModule, MatCardModule, TranslocoModule, MatChipsModule, Badges],
  template: ` <mat-card class="card-grid-item">
    <header id="description">
      <h2>{{ this.translateService.getTranslateText(this.cardData().name) }}</h2>
      <br />
      <p>{{ this.translateService.getTranslateText(this.cardData().description) }}</p>
    </header>
    <main id="actions">
      <button
        matButton="filled"
        aria-label="view more button"
        (click)="onViewMoreSelected(this.cardData())"
      >
        {{ 'portfolio.button' | transloco }}
      </button>
    </main>
    <footer id="badges">
      <app-badges [currentProject]="this.cardData()"></app-badges>
    </footer>
  </mat-card>`,
  styles: `
    :host {
      display: block;
      height: 100%;
    }

    mat-card.card-grid-item {
      padding: 2rem;
      height: 100%;
      display: flex;
      flex-direction: column;
      box-sizing: border-box;

      #description {
        flex: 1;
        p {
          text-align: justify;
        }
      }

      #actions {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding: 1rem;
      }

      #badges {
        width: 100%;
      }

      #badges-mat-chip-set {
        display: flex;
        flex-wrap: wrap;
      }

      #badges mat-chip {
        margin: 0.2rem;
        color: white !important;
      }
    }
  `,
  standalone: true,
})
export class Card {
  readonly dialog = inject(MatDialog);
  readonly translateService = inject(CustomTranslateService);

  public cardData = input.required<ProjectCardEntity>();

  public onViewMoreSelected(project: ProjectCardEntity) {
    this.dialog.open(ProjectDialogComponent, { maxHeight:610, data: project });
  }
}

import { Component, computed, inject} from '@angular/core';
import { Card as CardService } from '../../services/card';
import { toSignal } from '@angular/core/rxjs-interop';
import { Card as CardComponent } from './card';
import { MatExpansionModule } from '@angular/material/expansion';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatInputModule } from '@angular/material/input';
import { TranslocoPipe } from '@jsverse/transloco';
import { MatSelectModule } from '@angular/material/select';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-portfolio',
  imports: [
    CardComponent,
    MatExpansionModule,
    FormsModule,
    MatFormField,
    MatInputModule,
    TranslocoPipe,
    MatSelectModule,
    ReactiveFormsModule,
  ],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss',
})
export class Portfolio {
  private cardService = inject(CardService);
  private fb = inject(FormBuilder);

  public filterForm = this.fb.group({
    languages: [[] as number[]],
    frameworks: [[] as number[]],
    databases: [[] as number[]],
  });

  public selectedBadgeIds = toSignal(
    this.filterForm.valueChanges.pipe(
      map((value) => {
        const langs = value.languages ?? [];
        const frms = value.frameworks ?? [];
        const dbs = value.databases ?? [];
        return Array.from(new Set([...langs, ...frms, ...dbs]));
      }),
    ),
    { initialValue: [] as number[] },
  );

  private allProjects = toSignal(this.cardService.getProjects(), { initialValue: [] });
  private allBadges = toSignal(this.cardService.getBadges(), { initialValue: [] });

  public filteredBadges = computed(() => {
    const badgeList = this.allBadges() ?? [];
    return badgeList.filter(
      (badge) => badge.type === 'DB' || badge.type === 'FRAMEWORK' || badge.type === 'LANGUAGE',
    );
  });

  public projects = computed(() => {
    const sourceProjects = this.allProjects() ?? [];
    const selectedIds = this.selectedBadgeIds();

    if (selectedIds.length === 0) {
      return sourceProjects;
    }

    return sourceProjects.filter((proyecto) =>
      proyecto.badges?.some((badge) => selectedIds.includes(badge.id)),
    );
  });
}

import { Component, effect, inject } from '@angular/core';
import { ResumeService } from '../../services/resume-service';
import { toSignal } from '@angular/core/rxjs-interop';
import { ResumeEntity, ResumeEntityArray } from '../../model/resume.entity';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { TranslocoModule } from '@jsverse/transloco';
import { CustomTranslateService } from '../../services/custom-translate-service';
import { ResumeCard } from './resume-card';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-resume',
  imports: [MatTableModule, MatButtonModule, MatIconModule, TranslocoModule, ResumeCard],
  templateUrl: './resume.html',
  styleUrl: './resume.scss',
})
export class Resume {
  readonly translateService = inject(CustomTranslateService);
  readonly resumeService = inject(ResumeService);
  readonly tableData = toSignal(this.resumeService.getTableData(), {
    initialValue: [] as ResumeEntityArray,
  });
  columnsToDisplay = ['name'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedTableElement: ResumeEntity | null = null;
  protected readonly filesPath: string = environment.FILES;

  constructor() {
    effect(() => {
      const data = this.tableData();
      if (data && data.length > 0) {
        this.expandedTableElement = data[0];
      }
    });
  }

  isExpanded(element: ResumeEntity): boolean {
    return this.expandedTableElement === element;
  }

  toggle(element: ResumeEntity): void {
    this.expandedTableElement = this.isExpanded(element) ? null : element;
  }

  openFile(name: string): void {
    const url = `${this.filesPath}${name}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}

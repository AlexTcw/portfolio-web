import { inject, Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResumeEntityArray } from '../model/resume.entity';

@Service()
export class ResumeService {
  readonly http = inject(HttpClient);

  getTableData(): Observable<ResumeEntityArray> {
    return this.http.get<ResumeEntityArray>('/files/skills.json');
  }
}

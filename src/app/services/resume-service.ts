import { inject, Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResumeEntityArray } from '../model/resume.entity';
import { environment } from '../../environments/environment';

@Service()
export class ResumeService {
  readonly http = inject(HttpClient);
  private readonly filesPath = environment.FILES;

  getTableData(): Observable<ResumeEntityArray> {
    return this.http.get<ResumeEntityArray>(`${this.filesPath}skills.json`);
  }
}

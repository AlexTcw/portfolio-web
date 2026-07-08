import { inject, Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProjectBadges, ProjectCardEntities } from '../model/project-card.entity';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Service()
export class Card {
  private http = inject(HttpClient);
  private readonly filesPath = environment.FILES;

  getProjects(): Observable<ProjectCardEntities> {
    return this.http.get<ProjectCardEntities>(`${this.filesPath}projects.json`);
  }

  getBadges(ids?: string[]): Observable<ProjectBadges> {
    return this.http.get<ProjectBadges>(`${this.filesPath}badges.json`).pipe(
      map((badges: ProjectBadges) => {
        if (!ids || ids.length === 0) {
          return badges;
        }
        return badges.filter((badge) =>
          ids.includes(badge.type.toUpperCase()),
        ) as unknown as ProjectBadges;
      }),
    );
  }
}

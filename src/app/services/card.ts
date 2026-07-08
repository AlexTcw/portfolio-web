import { inject, Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProjectBadges, ProjectCardEntities } from '../model/project-card.entity';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Service()
export class Card {
  private http = inject(HttpClient);

  getProjects(): Observable<ProjectCardEntities> {
    return this.http.get<ProjectCardEntities>('/files/projects.json');
  }

  getBadges(ids?: string[]): Observable<ProjectBadges> {
    return this.http.get<ProjectBadges>('/files/badges.json').pipe(
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

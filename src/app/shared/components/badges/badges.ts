import { Component, input } from '@angular/core';
import { MatChip, MatChipSet } from '@angular/material/chips';
import { ProjectCardEntity } from '../../../model/project-card.entity';

@Component({
  selector: 'app-badges',
  imports: [MatChip, MatChipSet],
  templateUrl: './badges.html',
  styleUrl: './badges.scss',
})
export class Badges {
  public currentProject = input<ProjectCardEntity | undefined>();
}

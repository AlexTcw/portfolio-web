import { Component, inject } from '@angular/core';
import { MatButtonToggleChange, MatButtonToggleModule } from '@angular/material/button-toggle';
import { TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'app-toogle-lang',
  imports: [MatButtonToggleModule],
  templateUrl: './toogle-lang.html',
  styleUrl: './toogle-lang.scss',
  standalone: true,
})
export class ToogleLang {
  private translatService = inject(TranslocoService);

  protected currentLang = this.translatService.getActiveLang();

  onLangChange(event: MatButtonToggleChange): void {
    const selectedLang = event.value;
    this.translatService.setActiveLang(selectedLang);
  }
}

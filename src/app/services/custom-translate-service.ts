import { inject, Injectable} from '@angular/core';
import { TranslocoService } from '@jsverse/transloco';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class CustomTranslateService {
  private transloco = inject(TranslocoService);

  readonly lang = toSignal(this.transloco.langChanges$, {
    initialValue: this.transloco.getActiveLang(),
  });

  getTranslateText(text?: string): string {
    if (!text) return '';

    const lang = this.lang();

    const [es, en] = text.split('|').map((x) => x.trim());

    return lang === 'en' ? en : es;
  }
}

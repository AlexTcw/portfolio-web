import { Injectable, Service } from '@angular/core';
import { TranslocoService } from '@jsverse/transloco';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class CustomTranslateService extends TranslocoService{
  public getTranslateText(text:string | undefined){
    if (!text) {
      return '';
    }

    const textTrimmed = text.split('|');
    if (textTrimmed.length < 2) {
      return text.trim();
    } else {
      return this.getActiveLang() === 'en' ? textTrimmed[1].trim() : textTrimmed[0].trim();
    }
  }
}

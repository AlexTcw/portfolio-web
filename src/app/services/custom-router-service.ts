import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class CustomRouterService extends Router {
  goToRoute(route: string, type: 'link' | 'email' | 'whatsapp' = 'link'): void {
    const target = '_blank';
    let resolvedUrl = route;

    if (type === 'email') {
      const subject = encodeURIComponent("Contacto desde alextcw.com");
      const body = encodeURIComponent("Hola, me gustaría contactar contigo para...");
      resolvedUrl = `mailto:${route}?subject=${subject}&body=${body}`;
    } else if (type === 'whatsapp') {
      resolvedUrl = `https://wa.me/${route}`;
    }

    window.open(resolvedUrl, target, 'noopener,noreferrer');
  }
}

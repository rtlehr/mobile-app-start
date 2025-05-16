// src/app/services/ui.service.ts
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UiService {
  private headerEl: HTMLElement | null = null;
  private footerEl: HTMLElement | null = null;

  /** Call once, e.g. from your AppComponent, so the service can cache the header/footer elements */
  init(headerSelector = 'ion-header', footerSelector = 'ion-footer') {

    this.headerEl = document.querySelector(headerSelector);

    console.log("this.headerEl: " + this.headerEl);

    this.footerEl = document.querySelector(footerSelector);

    console.log("this.footerEl: " + this.footerEl);

  }

  // 1) Instantly hide (no animation)
  hideHeader() {
    if (this.headerEl) {
      console.log("in the if this.headerEl: " + this.headerEl);
      this.headerEl.style.display = 'none';
    }
  }
  hideFooter() {
    if (this.footerEl) {
      console.log("in the if this.footerEl: " + this.footerEl);
      this.footerEl.style.display = 'none';
    }
  }

  // 2) Instantly show (no animation)
  showHeader() {
    if (this.headerEl) {
      this.headerEl.style.display = '';
    }
  }
  showFooter() {
    if (this.footerEl) {
      this.footerEl.style.display = '';
    }
  }

  // 3) Animate header: slide up to hide, slide down to show
  animateHeaderHide() {
    if (!this.headerEl) { return; }
    this.headerEl.style.transition = 'transform 500ms ease-in-out';
    this.headerEl.style.transform = 'translateY(-100%)';
  }
  animateHeaderShow() {
    if (!this.headerEl) { return; }
    this.headerEl.style.transition = 'transform 500ms ease-in-out';
    this.headerEl.style.transform = 'translateY(0)';
  }

  // 4) Animate footer: slide down to hide, slide up to show
  animateFooterHide() {
    if (!this.footerEl) { return; }
    this.footerEl.style.transition = 'transform 500ms ease-in-out';
    this.footerEl.style.transform = 'translateY(100%)';
  }
  animateFooterShow() {
    if (!this.footerEl) { return; }
    this.footerEl.style.transition = 'transform 500ms ease-in-out';
    this.footerEl.style.transform = 'translateY(0)';
  }
}

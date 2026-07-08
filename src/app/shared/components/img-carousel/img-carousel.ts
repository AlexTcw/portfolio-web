import { Component, computed, input, OnDestroy, OnInit, signal } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { NgOptimizedImage } from '@angular/common';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-img-carousel',
  imports: [MatIcon, MatIconButton, NgOptimizedImage],
  templateUrl: './img-carousel.html',
  styleUrl: './img-carousel.scss',
})
export class ImgCarousel implements OnInit, OnDestroy {
  public projectId = input<number | undefined>();
  public width = input<number>(120);
  public height = input<number>(120);
  protected readonly imgPath: string = environment.PROJECTS_IMG;
  public currentIndex = signal<number>(0);
  private intervalId: any;
  public imgArray = computed<string[]>(() => {
    const id = this.projectId();

    if (id === undefined) {
      return [];
    }

    return [
      `${this.imgPath}${id}-1.webp`,
      `${this.imgPath}${id}-2.webp`,
      `${this.imgPath}${id}-3.webp`,
    ];
  });
  ngOnInit(): void {
    this.startAutoPlay();
  }
  ngOnDestroy(): void {
    this.stopAutoPlay();
  }
  private startAutoPlay(): void {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 10000);
  }
  private stopAutoPlay(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
  private resetAutoPlay(): void {
    this.stopAutoPlay();
    this.startAutoPlay();
  }

  public nextSlide(): void {
    const next = (this.currentIndex() + 1) % this.imgArray().length;
    this.currentIndex.set(next);
  }

  public prevSlide(): void {
    const prev = (this.currentIndex() - 1 + this.imgArray().length) % this.imgArray().length;
    this.currentIndex.set(prev);
  }

  public onNextClick(): void {
    this.nextSlide();
    this.resetAutoPlay();
  }

  public onPrevClick(): void {
    this.prevSlide();
    this.resetAutoPlay();
  }
}

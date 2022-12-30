import { Component, OnInit, ViewChild } from '@angular/core';
import { CarouselComponent, CarouselConfig } from 'ng-carousel-cdk';

import { AnimeInterface } from 'src/app/interfaces/anime-interface';
import { RandomAnimeResponseInterface } from 'src/app/interfaces/randomAnimeResponse-interface';
import { AnimeApiService } from 'src/app/services/anime-api.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  hideContent: boolean = true;

  @ViewChild(CarouselComponent) carouselRef!: CarouselComponent;

  config: CarouselConfig<AnimeInterface> = {
    items:[],
    slideWidth: 101,
    dragEnabled: false,
  };

  constructor(private service: AnimeApiService) { }

  ngOnInit(): void {
    for (let i = 0; i < 3; i++) {
      this.service.getRandomAnimes().subscribe((res: RandomAnimeResponseInterface) => {
        this.config.items?.push(res.data)
      })
    }
  }

  checkRating(arg: string): boolean{
    return /(^Rx)|(mild nudity)/i.test(arg) && this.hideContent
  }

  shortenDesc(arg: string): string {
      let check = arg.split(' ').splice(0,20)
      let reg = /[ \. | \, | \; | \! | \?]/
      if (reg.test(check[check.length-1])) {
          check[check.length-1] = check[check.length-1].replace(reg, '')
      }
      return check.join(' ') + '...'
  }

  showContent(): void{
    this.carouselRef.next()
    this.hideContent = false
    this.carouselRef.prev()
  }

  nextSlide(): void{
    this.carouselRef.next()
  }

  prevSlide(): void{
    this.carouselRef.prev()
  }

  chooseSlide(arg: number): void{
    this.carouselRef.setIndex(arg)
  }

  getActiveSlide(): number{
    return this.carouselRef?.slideIndex
  }
}

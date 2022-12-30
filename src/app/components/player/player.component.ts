import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  playPauseSymb: string = '▶';
  soundSymb: string = '🔊';
  playerY: number = 0;
  videoProgress: number = 0;

  play: boolean = false;
  sound: boolean = true;

  @ViewChild('player') player!: ElementRef;
  @ViewChild('video') video!: ElementRef;
  @ViewChild('volume') volume!: ElementRef;
  @ViewChild('timeline') timeline!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  soundOnOff() {
    this.sound = !this.sound
    if (!this.sound){
      this.video.nativeElement.volume = 0   
      this.volume.nativeElement.value = 0
      this.soundSymb = '🔇'
    } else {
      this.video.nativeElement.volume = 0.5
      this.volume.nativeElement.value = 50
      this.soundSymb = '🔊'
    }
  }

  playPause() {
    this.play = !this.play
    if (!this.play){
      this.playPauseSymb = '▶'
      this.video.nativeElement.pause()
    } else {
      this.playPauseSymb = '❚❚'
      this.video.nativeElement.play()
      this.progresUpdate()
    }
  }

  fullScreen() {
    if (document.fullscreenElement === null) {
      this.playerY = window.scrollY
      this.player.nativeElement.requestFullscreen()
    } else {
      document.exitFullscreen().then(res => window.scrollTo(0, this.playerY))
    }
  }

  changeVolume(){
    this.video.nativeElement.volume = this.volume.nativeElement.value / 100 
  }

  progresUpdate() {
    setInterval(() => {
      this.videoProgress = (100 * this.video.nativeElement.currentTime) / this.video.nativeElement.duration
    }, 1000);
  }

  rewind(e: MouseEvent) {
    let val = e.offsetX/this.timeline.nativeElement.offsetWidth
    this.video.nativeElement.currentTime = this.video.nativeElement.duration * val
  }

}

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TutorialService } from '../tutorial.service';

@Component({
  selector: 'app-balloons',
  templateUrl: './balloons.component.html',
  styleUrls: ['./balloons.component.scss'],
})
export class BalloonsComponent  implements OnInit {

  @ViewChild("slider") slider!:ElementRef;
  @ViewChild("balloon") balloon?:ElementRef;

  constructor(private tutorial:TutorialService) { }

  ngOnInit() {
    this.tutorial.tutorialStatusChange.subscribe(step => {
      if(step==2){
        this.slider.nativeElement.style.display='none';
      }
    });
    this.tutorial.balloonsStatusChange.subscribe(position => {
      if(this.balloon){
        this.balloon.nativeElement.style.display='block';
        this.balloon.nativeElement.style.position='fixed';
        this.balloon.nativeElement.style.top=position.top+"px";
        this.balloon.nativeElement.style.left=position.left+"px";
      }
    })
  }

  next() {
    this.tutorial.tutorialStatus.next(1);
  }

}

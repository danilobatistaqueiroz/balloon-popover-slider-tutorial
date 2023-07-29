import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TutorialService } from '../tutorial.service';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss'],
})
export class PresentationComponent  implements OnInit {

  @ViewChild("slider") slider!:ElementRef;

  constructor(private tutorial:TutorialService) { }

  ngOnInit() {
    this.tutorial.tutorialStatusChange.subscribe(step => {
      if(step==1){
        this.slider.nativeElement.classList.add("animate-slide");
      }
    })
  }

  finish() {
    this.slider.nativeElement.style.display='none';
    this.tutorial.tutorialStatus.next(2);
  }

}

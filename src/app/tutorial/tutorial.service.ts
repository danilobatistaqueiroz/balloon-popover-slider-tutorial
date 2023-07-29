import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TutorialService {

  tutorialStatus = new BehaviorSubject(0);
  tutorialStatusChange = this.tutorialStatus.asObservable();
  
  balloonsStatus = new BehaviorSubject({top:0,left:0});
  balloonsStatusChange = this.balloonsStatus.asObservable();

  constructor() { }


}

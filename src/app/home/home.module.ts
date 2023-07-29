import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { CallsComponent } from '../calls/calls.component';
import { ChatsComponent } from '../chats/chats.component';
import { PresentationComponent } from '../tutorial/presentation/presentation.component';
import { BalloonsComponent } from '../tutorial/balloons/balloons.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, CallsComponent, ChatsComponent, PresentationComponent, BalloonsComponent]
})
export class HomePageModule {}

import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import{VgCoreModule} from 'videogular2/core';
import {VgControlsModule} from 'videogular2/controls';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgBufferingModule} from 'videogular2/buffering';
import { VgStreamingModule } from 'videogular2/streaming';
import { PipesModule } from '../pipes/pipes.module';



@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule, 
    PipesModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    VgStreamingModule,
    RouterModule.forChild([{ path: '', component: Tab1Page }])
  ], 
  declarations: [Tab1Page]
})
export class Tab1PageModule {}

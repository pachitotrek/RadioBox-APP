import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ImagenPipe } from './imagen.pipe';

@NgModule({
  declarations: [
    ImagenPipe
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[
    ImagenPipe
  ]
})
export class PipesModule { }

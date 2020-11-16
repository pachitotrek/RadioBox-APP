import { Component, ViewChild, ElementRef } from '@angular/core';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { ApiService } from '../services/api.service';
import { VgAPI, VgPlayer, VgEvents } from 'videogular2/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  providers:[ApiService]
})
export class Tab2Page {
  show:boolean=false;
  redes:any=[];
  url_Sonido: any; 
  sound:VgAPI;
  @ViewChild('VgPlayer') vgPlayer: VgPlayer;
  constructor(private api:ApiService) {
    this.getAudioStream();
    this.getRedes();
  }

  ngOnInit() {   
    
  }

  StopAudio(){   
    if(this.show==true){
      this.show=false;  
    }else{
      this.show=true;     
    }    
  }
  getAudioStream(){
    this.api.getAudio().subscribe((resp:any)=>{
      this.url_Sonido=resp.results[0].url;
      
    });
  
  }
  getRedes(){
    this.api.getRedes().subscribe((resp:any)=>{
      this.redes=resp.results;
    });
  }

  onPlayerReady(player:VgAPI){
    this.sound= player;
   this.sound.getDefaultMedia().subscriptions.loadedMetadata.subscribe(this.playAudio.bind(this));
  
  
  }

  playAudio(){
    this.sound.play();
    this.show=true;
  }




}

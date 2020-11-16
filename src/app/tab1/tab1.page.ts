import { Component } from '@angular/core';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media/ngx';
import { ApiService } from '../services/api.service';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  providers:[ApiService]
})
export class Tab1Page {
  url_Video: any;
  videoObject: any;
  url_Sonido: any;
  audioObject: any;
  redes:any=[];
  publicidad:any=[];

  constructor(private streamingMedia: StreamingMedia,private api:ApiService) {
    this.getVideoStream();
    this.getPublicidad(); 
    this.getRedes();   
  }

  getVideoStream(){
    this.api.getVideo().subscribe((resp:any)=>{
      this.url_Video=resp.results[0].url; 
      this.videoObject=resp.results[0];
    });
  }
  getPublicidad(){
    this.api.getPublicidad().subscribe((resp:any)=>{
      this.publicidad= resp.results;     
    });
  }
  getRedes(){
    this.api.getRedes().subscribe((resp:any)=>{
      this.redes=resp.results;
    });
  }





  

}

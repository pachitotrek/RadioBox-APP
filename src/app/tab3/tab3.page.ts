import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  providers:[ApiService]
})
export class Tab3Page {
  eventos:any=[];
  redes:any=[];

  constructor(private api:ApiService) {
    this.getEventos();
    this.getRedes();

  }

  getEventos(){
    this.api.getEvento().subscribe((resp:any)=>{
      this.eventos=resp.results;
    });
  }
  getRedes(){
    this.api.getRedes().subscribe((resp:any)=>{
      this.redes=resp.results;
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
  providers:[ApiService]
})
export class Tab4Page implements OnInit {
  nosotros:any=[];
  redes:any=[];

  constructor(private api:ApiService) {
    this.getRedes();
   
   }

  ngOnInit() {
    this.getNosotros();
  }

  getNosotros(){
    this.api.getNosotros().subscribe((resp:any)=>{
        this.nosotros=resp.results[0];      
    });
  }
  getRedes(){
    this.api.getRedes().subscribe((resp:any)=>{
      this.redes=resp.results;
    });
  }

}

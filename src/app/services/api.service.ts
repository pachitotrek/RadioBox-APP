import { Injectable } from '@angular/core';
import { Global } from './global.service';
import { Observable } from 'rxjs';
import { HttpHeaders,HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url:String;

  constructor(private http:HttpClient) { 
    this.url= Global.url;
  }

  getAudio():Observable<any>{

    let headers = new HttpHeaders().set("Content-Type", "application/json");

    return this.http.get(this.url+'audio',{headers:headers});
  }
  getVideo():Observable<any>{

    let headers = new HttpHeaders().set("Content-Type", "application/json");

    return this.http.get(this.url+'video',{headers:headers});
  }
  getEvento():Observable<any>{

    let headers = new HttpHeaders().set("Content-Type", "application/json");

    return this.http.get(this.url+'eventos',{headers:headers});
  }
  getNosotros():Observable<any>{
    let headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.get(this.url+'nosotros',{headers:headers});
  }
  getPublicidad():Observable<any>{
    let headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.get(this.url+'publicidad',{headers:headers});
  }
  getRedes():Observable<any>{
    let headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.get(this.url+'red',{headers:headers});
  }




}

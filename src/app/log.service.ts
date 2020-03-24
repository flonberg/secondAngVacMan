import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  url: string;
  constructor(private http: HttpClient) { }

  setURL(s){
    this.url = s;
  }
  logMessage(s){
    const url = this.url + '?message=' + s;
    console.log("deBug url is "  + url);
    this.http.get(url);
  }

}

import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WINDOW } from './window.provider';

@Injectable({
  providedIn: 'root'
})
export class FiveDayCalService {

  constructor(private http: HttpClient, @Inject(WINDOW) private window: Window) { }

  test(){
    return 333;
  }
}

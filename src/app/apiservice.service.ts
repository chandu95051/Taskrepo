import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  API_KEY = 'YtIJ7ptoEDFvDRS28I3bVs3X0GZ9lXkP7OO';
  constructor(private Hc: HttpClient) { }



  public getkey(){
    return this.Hc.get(`https://price-api.datayuge.com/api/v1/compare/search?product=iphone%207&api_key=${this.API_KEY}`);
  }
}
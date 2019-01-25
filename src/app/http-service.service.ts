import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  baseUrl = 'http://localhost:3000/api/v1';
  constructor(private _http:HttpClient) { }

  public getAllStocks = (limit) => {
    return this._http.get(`${this.baseUrl}/stocks/all/${limit}`)
  }

  public getByDate = (date) => {
    return this._http.get(`${this.baseUrl}/stocks/${date}`);
  }

  public getBySymbol = (symbol,limit) => {
    return this._http.get(`${this.baseUrl}/stocks/${symbol}/${limit}`);
  }
}

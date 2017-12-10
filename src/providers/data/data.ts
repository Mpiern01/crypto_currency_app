import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  result:any;

  constructor(public _http: HttpClient) {
    
  }

  getCoins(coins) {
    let coinlist = '';
    
    coinlist = coins.join();
    
    return this._http.get("https://min-api.cryptocompare.com/data/pricemulti?fsyms="+ coinlist+"&tsyms=USD")
      .map(result => this.result = result);
    
    
  }

}

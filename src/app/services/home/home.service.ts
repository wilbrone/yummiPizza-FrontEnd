import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { HttpClient } from '@angular/common/http';

import { AppConst } from '../../constants/app-const';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private sPath: string = AppConst.serverPath;
  private path: string = AppConst.Path;
  private paths: string = AppConst.contactPath;

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  getPizza(){
    const url = this.path;

    return this.http.get(url, this.httpOptions);
  }

  getSinglePizza(param: any){
    const url = this.path + '/' + param;

    return this.http.get(url, this.httpOptions);
  }

  createOrder(id, quantity, totalCost){
    const url = this.sPath + 'create?' + 'pizza_id=' + id + '&' + 'quantity=' + quantity + '&' + 'totalCost=' + totalCost;
    console.log(url);

    return this.http.post(url, this.httpOptions);
  }

  createContact(info, id){
    const url = this.paths + '?name=' + info.name + '&' + 'email=' + info.email + '&' + 'phone=' + info.phone + '&' + 'apartment=' + info.apartment + '&' + 'street=' + info.street + '&' + 'order_id=' + id;
    console.log(url);

    return this.http.post(url, this.httpOptions);
  }
}

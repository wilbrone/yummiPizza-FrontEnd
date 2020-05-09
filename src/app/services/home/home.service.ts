import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { HttpClient } from '@angular/common/http';

import { AppConst } from '../../constants/app-const';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private path: string = AppConst.pizzaPath;
  private sPath: string = AppConst.orderPath;
  private Path: string = AppConst.serverPath;
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

  createOrder(){
    const url = this.sPath + 'create';

    return this.http.post(url, this.httpOptions);
  }

  createOrderItem(orderItem: any){
    const url = this.Path + 'create';

    return this.http.post(url, orderItem, this.httpOptions);
  }

  // createContact(info, id){
  //   const url = this.paths + '?name=' + info.name + '&' + 'email=' + info.email + '&' + 'phone=' + info.phone + '&' + 'apartment=' + info.apartment + '&' + 'street=' + info.street + '&' + 'order_id=' + id;
  //   console.log(url);

  //   return this.http.post(url, this.httpOptions);
  // }
}

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
}

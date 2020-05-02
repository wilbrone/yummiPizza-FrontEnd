import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AppConst } from '../../constants/app-const';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private sPath: string = AppConst.serverPath;
  private path: string = AppConst.Path;

  constructor(private http: HttpClient) { }

  getPizza(){
    const url = this.sPath;

    return this.http.get(url);
  }
}

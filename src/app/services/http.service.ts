import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { environment } from 'src/environments/environment';
import { RESPONSE } from '../models/response';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  public base_url = environment.base_url;

  constructor(
    private http: Http
  ) { }

  get(url: string) {
    return this.http.get(this.base_url + url, this.createRequestOptions({ 'Content-Type': 'application/json' }))
      .toPromise()
      .then(
        res => new RESPONSE(res),
        err => new RESPONSE(err)
      );
  }

  getFromApi(url: string) {
    return this.http.get(url, this.createRequestOptions({ 'Content-Type': 'application/json' }))
      .toPromise()
      .then(
        res => new RESPONSE(res),
        err => new RESPONSE(err)
      );
  }

  private createRequestOptions(obj?): RequestOptions {
    let header_param = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
    };
    if (typeof obj === 'object' && Object.keys(obj).length > 0) {
      for (let a in obj) {
        header_param[a] = obj[a];
      }
    }
    let option = new RequestOptions({ headers: new Headers(header_param) });
    return option;
  }
}

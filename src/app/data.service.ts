import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: HttpClient) { }

  restApiCallGet(url: string){
    console.log("Inside Get Data Service");
    return this.http.get(url);
  }

  restApiCallGetText(url: string){
    console.log("Inside Get Data Service");
    return this.http.get(url, {responseType: 'text'});
  }

  deleteApiCall(url: string){
    console.log("Inside Get Data Service");
    return this.http.delete(url, {responseType: 'text'});
  }

  restApiCallPost(url: string, body :any){
    console.log("Inside Post Data Service");
    return this.http.post(url, body);
  }

  restApiCallPostText(url: string, body :any){
    console.log("Inside Post Data Service");
    return this.http.post(url, body, {responseType: 'text'});
  }
}

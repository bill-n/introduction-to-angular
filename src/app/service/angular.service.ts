import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AngularService {

  mysongs =[{koffee: 'toffee'},{joeboy: 'nobody'},{wizkid: 'away'}]

  constructor(private http: HttpClient) { }
 
  sendData(formdata) : Observable<any>{
    return this.http.post('https://angulardb-895c3.firebaseio.com/post.json',formdata)
  }

  songs(){
    return this.mysongs
  }

}

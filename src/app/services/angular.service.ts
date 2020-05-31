import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AngularService {

  constructor(private http: HttpClient) { }

  sendPost(formdata): Observable<any>{
 
     return this.http.post('https://angular-serviceb.firebaseio.com/post.json', formdata)
    
    }

    getPost(){
      return this.http.get('https://angular-serviceb.firebaseio.com/post.json')
      .pipe(
        map(responseData => {
          const postsArray = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key });
            }
          }
          return postsArray;
        })
      )
   }

   deletePost(){
     return this.http.delete('https://angular-serviceb.firebaseio.com/post.json');
   }

}
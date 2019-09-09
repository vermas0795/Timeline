import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getAPICall(): Observable<any>{
    return this.http.get<any>('http://tst-api.azurewebsites.net/api/learning');
}

}

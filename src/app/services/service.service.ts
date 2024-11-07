import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IsChild } from '../childInterface';


@Injectable({
  providedIn: 'root',
})
export class childService {

  private api_url = "assets/childdata.json";

  constructor(private http : HttpClient) {
   }

   getChild(): Observable<IsChild>{
     return this.http.get<IsChild>(this.api_url);
   }
}

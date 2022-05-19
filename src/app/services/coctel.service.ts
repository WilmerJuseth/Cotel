import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoctelService {

  private urlEndPoint:string="https://www.thecocktaildb.com/api/";
  constructor(private http:HttpClient) { }

  getQuote():Observable<any>{
   return this.http.get(this.urlEndPoint+"json/v1/1/random.php");
  }
}

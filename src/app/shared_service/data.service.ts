import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { RequestOptions, Headers} from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private baseUrl: string = 'http://localhost:4600';
  private headers = new Headers({'Content-Type': 'application/json'});
  private options = new RequestOptions({headers:this.headers});


  constructor(private http: HttpClient) { }

  

 
  public  getData(): Observable<any>
 {
    return this.http.get("./assets/data/blogData.json")
  }

  public getRecipes(): Observable<any>
  {
    return this.http.get("./assets/data/recipeData.json")
  }
}

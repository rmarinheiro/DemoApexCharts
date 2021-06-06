import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  constructor(private http:HttpClient) { 

  }

  public getSummerBySeller(){
    return this.http.get("https://dsvendas-rafael.herokuapp.com/sales/sucess-by-seller")
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http : HttpClient
  ) { }

  login(data){
    return this.http.post("http://localhost:8000/api/auth/login",data);
  }

  signup(data){
    return this.http.post("http://localhost:8000/api/auth/signup",data);
  }
  
  getProduits(){
    return this.http.get("http://localhost:8000/api/produits");
  }
}

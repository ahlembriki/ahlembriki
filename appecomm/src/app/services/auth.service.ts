import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { user } from '../model/user.models';
import { UserComponent } from '../user/user.component';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl="http://localhost:8081/api/auth"
  constructor(private httpClient:HttpClient) { }

  login(loginDate:{username:String;password:String}):Observable<any>
  {
    return this.httpClient.post<any>(this.apiUrl+"/login",loginDate)
  }

  addUser(user:user):Observable<user>
  {
    return this.httpClient.post<user>(this.apiUrl+"/register",user)
  }
}


  
import { Injectable } from '@angular/core';
import { user } from '../model/user.models';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpclt:HttpClient) { }

  affiche()
  {
    console.log("test service !!!!")
  }

  getAllUsers(): Observable<user[]> {

    return this.httpclt.get<user[]>("http://localhost:3000/users")
  }
  deleteuser(id: number): Observable<user> {
    return this.httpclt.delete<user>(environment.host + "/users/" + id)
    //throw new Error('Method not implemented.');
  }
  
  
  adduser(usr:user): Observable<user> {
    return this.httpclt.post<user> (environment.host+ "/users", usr)

    //throw new Error('Method not implemented.');
  }
  getuserbyid(id: number):Observable<user> 
  {
    return this.httpclt.get<user>(environment.host + "/users/" + id)

  }
  
  update(id: number, usr: user): Observable<user> {
    return this.httpclt.put<user>(environment.host + "/users/" + id, usr)
  }


}

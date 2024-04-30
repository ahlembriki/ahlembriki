import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  username:String="";
  password :string="";
  
  constructor(private auth:AuthService ){}
  
  login(){
    const loginData={username:this.username,password:this.password};
    this.auth.login(loginData).subscribe(response=>
      {
        const userDate =response.auth;
        localStorage.setItem("userAuth",JSON.stringify(userDate))
        
        
        const accessToken=response.accessToken;
        localStorage.setItem("accessToken",accessToken)
  
        alert("connecte")
        console.log("connrecté")
      })
  }

}

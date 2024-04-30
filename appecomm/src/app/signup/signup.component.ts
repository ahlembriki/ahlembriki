import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { user } from '../model/user.models';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent 
 {


  
    user :user={
      id:-1,
      firstName:"",
      lastName:"",
      email:"",
      username:"",
      password:"",
      phone:"",
    }
    constructor(private userService:AuthService){}
    
    
    addUser() {
      this.userService.addUser(this.user).subscribe(newUser=>
        {
          console.log("User added")
          this.resetForm()
        }, error =>{
          console.error("Erreur",error)
        }
        )

      
        }
        resetForm(){
          this.user={
            id:-1,
            firstName:"",
            lastName:"",
            email:"",
            username:"",
            password:"",
            phone:""
          }
        }
      }
 


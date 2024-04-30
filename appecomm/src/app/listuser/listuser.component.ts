import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../services/user.service';
import { user } from '../model/user.models';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit {
  listuser: user []=[]

  constructor(private route : Router,private userserv:UsersService) {

  }

  ngOnInit(): void {
    this.userserv.getAllUsers().subscribe(
      (tab)=>{
        this.listuser=tab;
      }

    )
    
  }
  updateuser(id: number){
    this.route.navigate(['/updateuser' , id])

  }
  deleteuser(id :number){
    this.userserv.deleteuser(id).subscribe(
      (x) => {
        this.userserv.getAllUsers().subscribe(
          (listu) =>{
            this.listuser = listu
            this.route.navigate(['/listuser'])

          }
        )
      }
    )

  }

  }



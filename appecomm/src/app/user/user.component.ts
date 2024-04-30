import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/user.service';
import { user } from '../model/user.models';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  listusr:user[]=[]






  constructor(private userserv: UsersService){

  }
  ngOnInit(): void {

    this.userserv.getAllUsers().subscribe(

      (tab)=>{
        this.listusr=tab;
      }
    )

    
  }

  

}

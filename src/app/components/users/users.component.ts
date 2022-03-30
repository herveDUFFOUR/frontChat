import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  userSub!: Subscription;

  users: User[] = []


  constructor(private userService: UserService) { }

  ngOnInit(): void {

        this.userSub = this.userService.findAll().subscribe((response: HttpResponse<any>) => {

          if(response.status == 200){

              const responseArray = JSON.parse(response.body)

              responseArray.forEach((u: any) => {

                let user: User = {login: u.login,password: u.password,name: u.name}

                this.users.push(user)

              });

          }
        })
  }

}

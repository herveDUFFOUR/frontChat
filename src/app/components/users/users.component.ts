import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  userSub!: Subscription;

  constructor(private userService: UserService) { }

  ngOnInit(): void {

        this.userSub = this.userService.findAll().subscribe((response: HttpResponse<any>) => {

          if(response.status == 200){
            console.log(response)
            console.log(response.body)
          }
        })
  }

}

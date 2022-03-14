import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginSub!: Subscription;

  constructor(private formBuilder: FormBuilder,private userService: UserService) {
    this.loginForm = formBuilder.group({
      login: ['',Validators.required],
      password: ['',Validators.required]
    });
  }

  login(){
    console.log('login method.')
    let user: User = {
      login: this.loginForm.get('login')?.value,
      password: this.loginForm.get('password')?.value
    };
    console.log({
      user: user
    })

    this.loginSub = this.userService.login(user).subscribe(
      (response : HttpResponse<any>) => {
        console.log(response)
        console.log(response.headers)
      }
    )
  }

  ngOnInit(): void {
  }

}

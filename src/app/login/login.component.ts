import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    user : any;
    loggedUser:any;
  constructor(private router: Router,private userService:UserService) {
    this.user = {userName : '' , password : ''};  
  }

  ngOnInit(): void {
  }

  async loginSubmit(loginForm : any) {
    await this.userService.loginUser(this.user.userName, this.user.password).then((user) => {console.log(user); this.loggedUser = user});
    if(this.loggedUser != null){
  
    this.userService.setUserLoggedIn();
    this.router.navigate(['homepage']);
      alert('Login Successful !!');
    } else {
      alert("Invalid Credentials");
    }
  }
}

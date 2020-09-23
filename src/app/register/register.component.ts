import { Component, OnInit } from '@angular/core';
import { UserService} from '../user.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user:any;

  constructor(private service:UserService) {
    this.user = {userId:'',userName:'',contactNo:'',password:''};
   }

  ngOnInit(): void {
  }

  RegisterSubmit(RegisterForm : any):void {
    this.service.registerUser(this.user).subscribe((result:any) => {console.log(result);});
    console.log(RegisterForm);
  }

}

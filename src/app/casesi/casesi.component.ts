import { Component, OnInit } from '@angular/core';
import { UserService} from '../user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-casesi',
  templateUrl: './casesi.component.html',
  styleUrls: ['./casesi.component.css']
})
export class CasesiComponent implements OnInit {

  total_active:any
  total_recovered:any
  total_deaths:any
  total_confirmed:any

  constructor(private user:UserService) { }

  ngOnInit(): void {
  
  
  }

}

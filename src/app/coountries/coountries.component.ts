import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { GlobalDataSummary } from '../models/global-data';

@Component({
  selector: 'app-coountries',
  templateUrl: './coountries.component.html',
  styleUrls: ['./coountries.component.css']
})
export class CoountriesComponent implements OnInit {
 data:GlobalDataSummary[];
 countries:string[]=[];
  constructor(private userService :UserService) { }

  ngOnInit(): void {
 /* this.userService.getGlobalData().subscribe(result=>{
this.data=result;
this.data.forEach(cs=>{
  this.countries.push(cs.country)
})
    })*/
  }
}

import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { GlobalDataSummary } from '../models/global-data';

@Component({
  selector: 'app-casesc',
  templateUrl: './casesc.component.html',
  styleUrls: ['./casesc.component.css']
})
export class CasescComponent implements OnInit {

  totalConfirmed = 0;
  totalActive = 0;
  totalDeaths = 0;
  totalRecovered = 0;
  globalData : GlobalDataSummary[];


  constructor(private userService : UserService) { }

  ngOnInit(){

   /* this.userService.getGlobalData() 
    .subscribe(
      {
        next : (result) => {
          console.log(result);
          this.globalData=result;
          result.forEach(cs => {
            if(!Number.isNaN(cs.confirmed)){
            this.totalActive += cs.active
            this.totalConfirmed += cs.confirmed
            this.totalDeaths += cs.deaths
            this.totalRecovered += cs.recovered
            }
          })
        }
      }
    )*/
  }

}

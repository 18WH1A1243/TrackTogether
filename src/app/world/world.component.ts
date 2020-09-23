import { Component, OnInit } from '@angular/core';
import {GlobalModel} from '../models/global-model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.css']
})
export class WorldComponent implements OnInit {
countries :any[];
dailyData :any[];
  global :boolean;
  country :string;
  data :GlobalModel;

  lineChartData:any[] = [
    {
      data : [65,64,33,44],
      label : 'Temp label'
    }
  ];

  lineChartType = 'line';
  lineChartLabels : any[] = [
    'Label01' ,'Label01','Label03'
  ];

  barChartType = 'bar';
  barChartLabels : any[] = [
    'Infected' ,'Recovered','Deaths'
  ];

  barChartData:any[] = [
    {
      data : [65,64,33,44],
      label : 'Labele'
    }
  ];
  


  constructor(private userService:UserService ) { }

  ngOnInit() {
 /*   this.global = true;
    this.fetchData();*/
  }

 /* fetchData() {
    this.userService.fetchData().subscribe((res : any[]) => {
      this.data.confirmed = res['confirmed']['value'];
      this.data.recovered = res['recovered']['value'];
      this.data.deaths = res['deaths']['value'];
      this.data.lastupdate = res['lastupdate'];
    })
  }*/

}

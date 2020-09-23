import { Component, OnInit } from '@angular/core';
import { UserService} from '../user.service';
import {Router} from '@angular/router';
import { GoogleChartInterface } from 'ng2-google-charts';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.css']
})
export class CasesComponent {

  countries:any
  country:any
  Confirmed:Number
  Recovered:Number
  Deaths:Number
  Active:Number
  TotalConfirmed:Number
  TotalDeaths:Number
  TotalRecovered:Number
  TotalActive:Number
  Date:Date
  Country:String

  /*pieChart: GoogleChartInterface = {
    chartType: 'PieChart'
  }

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
  ];*/
  

  
  constructor(private userService : UserService){}

 /* initChart() {

    let datatable = [];
    datatable.push(["Country", "Cases"])
    this.userService.getTotal().forEach(cs => {
      datatable.push([
        cs.country ,cs.Confirmed
      ])
    })
    
    
    
    this.pieChart = {
    chartType: 'PieChart',
  dataTable: datatable,
  //firstRowIsData: true,
  options: {'Country': 'Cases'},
};
  }*/

  ngOnInit(){
    this.userService.getCountries().subscribe((data)=>{
      console.log(data)
      this.countries = data
    })
   /* this.getworldtotal()
    this.initChart();*/
  }

  

  getCoronaData() {
    this.userService.getCoronaRealData(this.country).subscribe((data) =>{
      console.log(data)
      var index = data.length-1
      this.Confirmed= data[index].Confirmed
      this.Recovered= data[index].Recovered
      this.Deaths= data[index].Deaths
      this.Date= data[index].Date
      this.Active= data[index].Active
      this.Country= data[index].Country

    })
  }

  getCountry(country:any){
    this.country = country
  }

  getworldtotal() {
    this.userService.getTotal().subscribe((data) => {
      console.log(data)
      this.TotalConfirmed = data.TotalConfirmed
     this.TotalDeaths = data.TotalDeaths 
      this.TotalRecovered = data.TotalRecovered
      this.TotalActive = data.TotalConfirmed - data.TotalRecovered - data.TotalDeaths 
    })
  }

}







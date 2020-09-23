import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {AuthGuard} from './auth.guard';
import { GlobalDataSummary } from './models/global-data';
import {GlobalModel} from './models/global-model';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = "https://covid19.mathdro.id/api";

  private isUserLogged: any;
  private globalDataUrl = "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/07-26-2020.csv";      

  constructor(private httpClient: HttpClient) {
    this.isUserLogged = false;
   }

   setUserLoggedIn(): void {
        this.isUserLogged = true;
   }

   setUserLoggedOut(): void {
         this.isUserLogged=false;
   }

   getUserLogged(): any {
     return this.isUserLogged;
   }

   registerUser(user:any) {
     return this.httpClient.post('RESTAPI2018/webapi/myresource/regUser',user);
   }

 8
   loginUser(userName:any, password : any) : any {
     return this.httpClient.get('RESTAPI2018/webapi/myresource/userLogin/' + userName + '/' + password).toPromise();
   }

   getCountries():Observable<any> {
    const url = "https://api.covid19api.com/countries"
    return this.httpClient.get<any>(url)
  }

  getCoronaRealData(country):Observable<any> {
    const url ="https://api.covid19api.com/total/country/" + country
    return this.httpClient.get<any>(url)
 }

 getTotal():Observable<any> {
  const url ="https://api.covid19api.com/world/total" 
  return this.httpClient.get<any>(url)
 }

 getBeds():Observable<any> {
  const url ="https://api.rootnet.in/covid19-in/hospitals/beds" 
  return this.httpClient.get<any>(url)
 }
 /*fetchData() {
   return this.httpClient.get(this.baseUrl);
 }

 fetchdataByCountry(country:string) {
   return this.httpClient.get(this.baseUrl + '/countries' + country);
 }

 fetchDailyData() {
  return this.httpClient.get(this.baseUrl + '/daily');
 }

 fetchCountries() {
  return this.httpClient.get(this.baseUrl + '/countries');
 }*/

 /*getCoronaRealtimeDataStates():Observable<any> {
  const url ="https://api.covid19india.org/data.json"
  return this.httpClient.get<any>(url)
}*/
   
  /*getGlobalData() {
    return this.httpClient.get(this.globalDataUrl , {responseType :'text'}).pipe(
      map(result => {
        let data:GlobalDataSummary[] = [];
        let raw = {}
        let rows = result.split('\n');
        rows.splice(0, 1);
   //     console.log(rows);
         rows.forEach(row => { 
           let cols = row.split(/(?=\S)/)
            
           let cs = {
           
             country : cols[3],
             confirmed : +cols[7],
             deaths :+cols[8] ,
             recovered : +cols[9],
             active :+cols[10]
           };
           let temp : GlobalDataSummary= raw[cs.country];
            if(temp){
              temp.active = cs.active + temp.active
              temp.confirmed = cs.confirmed + temp.confirmed
              temp.deaths = cs.deaths + temp.deaths
              temp.recovered = cs.recovered + temp.recovered

              raw[cs.country] = temp;
            } else {
              raw[cs.country] = cs;
            }
             
           })

        // console.log(raw);

        return <GlobalDataSummary[]>Object.values(raw);
      })
    )
  }*/
}



  



 




  









  


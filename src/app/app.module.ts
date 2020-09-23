import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';

import {from} from 'rxjs';
import {AuthGuard} from './auth.guard';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CasesComponent } from './cases/cases.component';
import { InfoComponent } from './info/info.component';
import { CasesiComponent } from './casesi/casesi.component';
import { CasescComponent } from './casesc/casesc.component';
import { CoountriesComponent } from './coountries/coountries.component';
import { WorldComponent } from './world/world.component';
import { SymptomsComponent } from './symptoms/symptoms.component';
import { PreventionComponent } from './prevention/prevention.component';
import { MedicineComponent } from './medicine/medicine.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LogoutComponent } from './logout/logout.component';
import { QuizComponent } from './quiz/quiz.component';
import { DonateComponent } from './donate/donate.component';
import { TreatmentComponent } from './treatment/treatment.component';
//import { HospitalsComponent } from './hospitals/hospitals.component';

const appRoot: Routes = [{path: '', component: HomepageComponent},
                         {path: 'login', component: LoginComponent},
                         {path: 'homepage', component: HomepageComponent},
                        {path: 'register', component: RegisterComponent},
                        {path: 'info', component: InfoComponent},
                   /*     {path: 'cases',canActivate: [AuthGuard] , component: CasesComponent},*/
                  // {path: 'hospitals', component: HospitalsComponent},
                   {path: 'treatment', component: TreatmentComponent},
                        {path: 'cases', component: CasesComponent},
                        {path: 'quiz', component: QuizComponent},
                        {path: 'donate', component: DonateComponent},
                        {path: 'casesc', component: CasescComponent},
                         {path: 'coountries', component: CoountriesComponent},
                         {path: 'world', component: WorldComponent},
                       /*  {path: 'prevention',canActivate: [AuthGuard] ,component: PreventionComponent},*/
                        {path: 'prevention',component: PreventionComponent},
                         {path: 'medicine', component: MedicineComponent},
                         {path:'symptoms', component: SymptomsComponent},
                         {path:'logout', component: LogoutComponent}
                        
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    CasesComponent,
    InfoComponent,
    CasesiComponent,
    CasescComponent,
    CoountriesComponent,
    WorldComponent,
    SymptomsComponent,
    PreventionComponent,
    MedicineComponent,
    HomepageComponent,
    LogoutComponent,
    QuizComponent,
    DonateComponent,
    TreatmentComponent,
  //  HospitalsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    Ng2GoogleChartsModule,FormsModule, HttpClientModule, RouterModule.forRoot(appRoot)
  ],
  
  providers: [AuthGuard],

  bootstrap: [AppComponent]
})
export class AppModule { }

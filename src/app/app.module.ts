import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { ViewSurveysComponent } from './components/view-surveys/view-surveys.component';
import { TakeSurveyComponent } from './components/take-survey/take-survey.component';
import { FormComponent } from './components/form/form.component';
import { ResultComponent } from './components/result/result.component';
import { InsightsComponent } from './components/insights/insights.component';
import { AddSurveyComponent } from './components/add-survey/add-survey.component';
import { SurveyResultComponent } from './components/survey-result/survey-result.component';



const appRoutes: Routes = [
 
  { path: 'view',      component: ViewSurveysComponent },
  { path: 'add',  component: FormComponent},
  { path: 'takeSurvey',component: TakeSurveyComponent },
  { path: 'result', component: ResultComponent},
  { path: 'insights', component: InsightsComponent},
  { path: 'addSurvey', component: AddSurveyComponent},
  { path: 'surveyResult', component: SurveyResultComponent}
  
];



@NgModule({
  declarations: [
    AppComponent,
    ViewSurveysComponent,
    TakeSurveyComponent,
    FormComponent,
    ResultComponent,
    InsightsComponent,
    AddSurveyComponent,
    SurveyResultComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
   providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
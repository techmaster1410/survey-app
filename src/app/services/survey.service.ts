
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Survey } from '../models/survey';
import { Choice } from '../models/choice';
import { SurveyInput } from '../models/inputsurvey';

const baseUrl = 'http://localhost:8000/api/survey/';
const choiceUrl='http://localhost:8000/api/choice/';
const cloudUrl = 'https://us-central1-test-survey-app-275015.cloudfunctions.net/function-2/users';
const cloudUrl1='https://us-central1-domshom-web-273102.cloudfunctions.net/first-function/users';

@Injectable({
  providedIn: 'root'
})

export class SurveyService {
      

      addSurvey(survey: SurveyInput){
        console.log('In service : ', survey)
        return this.http.post(baseUrl, 
          survey,{observe : 'response'})
    
      }

      enroll(obj: import("../models/inputsurvey").SurveyInput) {
            throw new Error("Method not implemented.");
      }

  surveys:Array<Survey>=[]
  choices:Array<Choice>=[]
  
  

  constructor(private http: HttpClient) {

   }

   fetchAllSurveys(){
    return this.http.get(baseUrl);
   }

   fetchAllOptions(surveyName:string){
    return this.http.get(baseUrl+surveyName);
  }
  fetchAllChoices(surveyName:string){
    return this.http.get(choiceUrl+surveyName);
  }

  update(choice: Choice){
    console.log('In service : ', choice)
    return this.http.put(choiceUrl, 
      choice,{observe : 'response'})

  }

   
}






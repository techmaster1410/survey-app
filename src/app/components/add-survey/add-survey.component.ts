import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/User';
import { Survey } from 'src/app/models/survey';
import { Choice } from 'src/app/models/choice';
import { ChoiceInput } from 'src/app/models/inputchoice';
import { SurveyInput } from 'src/app/models/inputsurvey';
import { SurveyService } from 'src/app/services/survey.service';

@Component({
  selector: 'app-add-survey',
  templateUrl: './add-survey.component.html',
  styleUrls: ['./add-survey.component.css']
})
export class AddSurveyComponent  {

  
    choices=new Array(new ChoiceInput('','',0),new ChoiceInput('','',0),new ChoiceInput('','',0),new ChoiceInput('','',0));
    obj = new SurveyInput('', '',this.choices);
    topicHasError = true;
    submitted = false;
  
      showMessage: boolean;
    
      constructor(private service:SurveyService) {}
    
      validateTopic(value) {
        if (value === 'default') {
          this.topicHasError = true;
        } else {
          this.topicHasError = false;
        }
      }
    
      check()
      {
            this.choices[0].surveyName=this.obj.name;
            this.choices[1].surveyName=this.obj.name;
            this.choices[2].surveyName=this.obj.name;
            this.choices[3].surveyName=this.obj.name;
            console.log(("Object added: "+this.obj));
            this.onSubmit();
      }


      onSubmit() {
        this.submitted = true;
        this.service.addSurvey(this.obj)
        .subscribe(res=>{
          console.log(res)
          if(res.status == 201){
            this.showMessage = true;
          }
        });
      
      }
      userModel(userModel: any) {
            throw new Error("Method not implemented.");
      }
  

}


/*

import { Component, OnInit, Input } from '@angular/core';

import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/User';
import { Survey } from 'src/app/models/survey';
import { Choice } from 'src/app/models/choice';
import { ChoiceInput } from 'src/app/models/inputchoice';
import { SurveyInput } from 'src/app/models/inputsurvey';
import { SurveyService } from 'src/app/services/survey.service';

@Component({
      selector: 'app-form',
      templateUrl: './form.component.html',
      styleUrls: ['./form.component.css']
})

export class FormComponent{

      title = 'app';
      topics = ['Angular', 'React', 'Vue'];
      choices=new Array(new ChoiceInput('','',0),new ChoiceInput('','',0),new ChoiceInput('','',0));
      obj = new SurveyInput('', '',this.choices);
      topicHasError = true;
      submitted = false;
      errorMsg = '';
      _surveyService: any;
      showMessage: boolean;
    
      constructor(private service:SurveyService) {}
    
      validateTopic(value) {
        if (value === 'default') {
          this.topicHasError = true;
        } else {
          this.topicHasError = false;
        }
      }
    
      check()
      {
            this.choices[0].surveyName=this.obj.name;
            this.choices[1].surveyName=this.obj.name;
            this.choices[2].surveyName=this.obj.name;
            console.log(("XXXXXXXXXXX"+this.obj));
            this.onSubmit();
      }


      onSubmit() {
        this.submitted = true;
        this.service.addSurvey(this.obj)
        .subscribe(res=>{
          console.log(res)
          if(res.status == 201){
            this.showMessage = true;
          }
        });
      
      }
      userModel(userModel: any) {
            throw new Error("Method not implemented.");
      }
    }
    






*/
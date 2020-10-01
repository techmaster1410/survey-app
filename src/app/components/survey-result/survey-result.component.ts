import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Survey } from 'src/app/models/survey';
import { Choice } from 'src/app/models/choice';
import * as Chart from 'chart.js';
import { SurveyService } from 'src/app/services/survey.service';

@Component({
  selector: 'app-survey-result',
  templateUrl: './survey-result.component.html',
  styleUrls: ['./survey-result.component.css']
})
export class SurveyResultComponent implements OnInit {

  surveys: Array<Survey>=[]
  choices: Array<Choice>=[]
  surveyName : string;
  count: number;
  canvas:any;
  ctx:any;
  countChoice: Array<number>=[]
  surveyNames: Array<any>=[]
  question: string;
  showMessage : boolean = false;
  value=true;

  

  constructor(private surveyService : SurveyService, private router: Router, private route: ActivatedRoute) { }

  

  ngOnInit():void {
    this.route.paramMap.subscribe(params => {
      
      console.log('***', params.get('name'));
      this.surveyName = params.get("name");
      console.log(this.surveyName);
    })
    this.surveyService.fetchAllOptions(this.surveyName).subscribe((res: any) => {
      
      this.question = res.question;
      this.choices = res.choices;
      
      console.log(this.choices);
      for(var choice of this.choices){
        this.countChoice.push(choice.count)
        this.surveyNames.push(choice.choice_text)
      }

      console.log(this.countChoice);
      console.log(this.surveyNames)


      this.canvas = document.getElementById('myChart');
      this.ctx = this.canvas.getContext('2d');
      let myChart = new Chart(this.ctx, {
      type: 'doughnut',
      data: {
          labels: this.surveyNames,
          datasets: [{
              label: '# of Votes',
              data: this.countChoice,
              backgroundColor: ['red','yellow','blue','magenta'],
              borderWidth: 1
          }]
      },
      options: {
        responsive: false,
        display:true
      }
    }); 

    this.canvas = document.getElementById('myChart1');
      this.ctx = this.canvas.getContext('2d');
      let myChart1 = new Chart(this.ctx, {
      type: 'bar',
      data: {
          labels: this.surveyNames,
          datasets: [{
              label: '# of Votes',
              data: this.countChoice,
              backgroundColor: ['gray','yellow','orange','magenta'],
              borderWidth: 1,
              minBarLength: 0
          }]
      },
      options: {
        responsive: false,
        display:true
      }
    }); 





      })

      
}

calculate(choice: Choice){
if(this.value===true)
{
 
console.log("In calculate "+choice.count++);
  this.updateEmployee(choice) ;
  this.value=false;
}

}

updateEmployee(choice:Choice){
  console.log("In update "+choice.count);
  this.surveyService.update(choice)
  .subscribe(res=>{
    console.log(res)
    if(res.status == 202){
      this.showMessage = true;
    }
  });
}
viewresult()
{
  console.log("in result :");
  this.router.navigate(['view']);
  }



}


/*

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Survey } from 'src/app/models/survey';
import { Choice } from 'src/app/models/choice';
import { SurveyService } from 'src/app/services/survey.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})




export class ResultComponent implements OnInit {

  surveys: Array<Survey>=[]
  choices: Array<Choice>=[]
  surveyName : string;
  count: number;
  question: string;
  showMessage : boolean = false;
  value=true;

  

  constructor(private surveyService : SurveyService, private router: Router, private route: ActivatedRoute) { }

  // ngOnInit(): void {
  //   this.surveyService.fetchAllSurveys()
  //   .subscribe((res:Array<Survey>)=> {
  //     console.log(res);
  //     this.surveys = res;
      
  //   })
    
  // }

  ngOnInit():void {
    this.route.paramMap.subscribe(params => {
      
      console.log('***', params.get('name'));
      this.surveyName = params.get("name");
      console.log(this.surveyName);
    })
    this.surveyService.fetchAllOptions(this.surveyName).subscribe((res: any) => {
      
      this.question = res.question;
      this.choices = res.choices;
      })

}

calculate(choice: Choice){
if(this.value===true)
{
 
console.log("In calculate "+choice.count++);
  this.updateEmployee(choice) ;
  this.value=false;
}

}


updateEmployee(choice:Choice){
  // console.log(this.myForm.controls['name'])
  // console.log(name, salary);
  console.log("In update "+choice.count);
  
  this.surveyService.update(choice)
  .subscribe(res=>{
    console.log(res)
    if(res.status == 202){
      this.showMessage = true;
    }
  });
}
viewresult()
{
  console.log("in result :");
  this.router.navigate(['view']);
  }



}




*/

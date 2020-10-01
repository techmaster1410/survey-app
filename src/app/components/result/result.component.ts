import { Component, OnInit } from '@angular/core';
import { SurveyService } from 'src/app/services/survey.service';
import { Choice } from 'src/app/models/choice';
import { Router, ActivatedRoute } from '@angular/router';
import * as Chart from 'chart.js';
import { Survey } from 'src/app/models/survey';

import { preserveWhitespacesDefault } from '@angular/compiler';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  surveys: Array<Survey>=[]
  choices: Array<Choice>=[]
  surveyName : string;
  title = 'angular8chartjs';
  canvas: any;
  ctx: any;
  clrs: Array<String>=[]
  count: number;
  question: string;
  countChoice: Array<number>=[]
  surveyNames: Array<String>=[]
  survey: Survey;
  
  

  choices1:Array<Choice>=[]
  constructor(private surveyService : SurveyService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
   

      this.surveyService.fetchAllSurveys()
      .subscribe((res:Array<Survey>)=> {
      console.log(res);
      this.surveys = res;
    
      
      
      for(var survey of this.surveys){
        for(var choice of survey.choices){
          this.countChoice.push(choice.count)
          this.surveyNames.push(choice.choice_text)
        }
        
      }
      
      
      console.log(this.countChoice);
      console.log(this.surveyNames);


      this.canvas = document.getElementById('myChart');
      this.ctx = this.canvas.getContext('2d');
      let myChart = new Chart(this.ctx, {
      type: 'doughnut',
      data: {
          labels: this.surveyNames,
          datasets: [{
              label: '# of Votes',
              data: this.countChoice,
              backgroundColor: ['red','green','blue','yellow','orange','red','green','blue','yellow','orange','red','green'],
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
      type: 'pie',
      data: {
          labels: this.surveyNames,
          datasets: [{
              label: '# of Votes',
              data: this.countChoice,
              backgroundColor: ['red','green','blue','yellow','orange','red','green','blue','yellow','orange','red','green'],
              borderWidth: 1
          }]
      },
      options: {
        responsive: false,
        display:true
      }
    });


      
      })

    this.surveyService.fetchAllChoices(this.surveyName)
    .subscribe((res:Array<Choice>)=>{
      // console.log(res);
      this.choices1 = res;
      })
      }
  }



/*
{
choices1:Array<Choice>=[]

constructor(private surveyService : SurveyService

this.surveyService.fetchAllChoices(){
.subscribe(res:Array<Choice>)=>{
console.log(res);
this.choices1 = res;
})
}
*/

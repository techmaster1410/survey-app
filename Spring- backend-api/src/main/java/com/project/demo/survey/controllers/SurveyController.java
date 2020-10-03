package com.project.demo.survey.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.demo.survey.entities.*;
import com.project.demo.survey.services.*;



@RestController
@CrossOrigin("*")
@RequestMapping("/api")
public class SurveyController {

	@Autowired
	SurveyService surveyService;

	@PostMapping("/question")
	public ResponseEntity<Void> addQuestion(@RequestBody Question question) {
		surveyService.addQuestions(question);
		ResponseEntity<Void> re = new ResponseEntity<Void>(HttpStatus.CREATED);
		return re;

	}
	
	@GetMapping("/question")
	public List<Question> findAllQuestions(){
		return surveyService.findAllQuestion();
	}
	@GetMapping("/survey/{name}")
	public Survey findQuizByName(@PathVariable("name") String name){
		return surveyService.findSurveyByName(name);
	}
	
//	@PutMapping("/choice")
//	public ResponseEntity<Void> updateChoice(@RequestBody Choice choice){
//		
//		surveyService.updateChoice(choice);
//		ResponseEntity<Void> re = new ResponseEntity<>(HttpStatus.ACCEPTED);
//		return re;
//	}
	
	@PostMapping("/survey")
	public ResponseEntity<Void> addQuiz(@RequestBody Survey survey) {
		surveyService.addSurvey(survey);
		ResponseEntity<Void> re = new ResponseEntity<Void>(HttpStatus.CREATED);
		return re;

	}
	
	@PutMapping("/choice")
	public ResponseEntity<Void> updateChoice(@RequestBody Choice choice){

	surveyService.updateChoice(choice);
	ResponseEntity<Void> re = new ResponseEntity<>(HttpStatus.ACCEPTED);
	return re;
	}

	@GetMapping("/choice")
	public List<Choice> findAllChoices(){
	return surveyService.findAllChoices();
	}

	
	@GetMapping("/survey")
	public List<Survey> findAllSurveys(){
		return surveyService.findAllSurveys();
	}

}
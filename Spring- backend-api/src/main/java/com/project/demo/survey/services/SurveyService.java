package com.project.demo.survey.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.project.demo.survey.entities.Choice;
import com.project.demo.survey.entities.Question;
import com.project.demo.survey.entities.Survey;
import com.project.demo.survey.repos.ChoiceRepository;
import com.project.demo.survey.repos.QuestionRepository;
import com.project.demo.survey.repos.SurveyRepository;


@Service
public class SurveyService {
	@Autowired
	QuestionRepository questionRepository;
	
	@Autowired
	SurveyRepository surveyRepository;
	
	@Autowired
	ChoiceRepository choiceRepository;
	
	public List<Choice> findAllChoices() {
		List<Choice> choices =  choiceRepository.findAll();
		System.out.println(choices);
		return choices;
		}
	
	@Transactional
	public void updateChoice(Choice updatedChoice) {
	Choice choice = choiceRepository.findById(updatedChoice.getId());
	choice.setCount(updatedChoice.getCount());
	choice.setChoice_text(updatedChoice.getChoice_text());
	}
	
	
	


	public Question addQuestions(Question question) {
		return questionRepository.save(question);
		
	}

	public List<Question> findAllQuestion() {
		List<Question> questions =  questionRepository.findAll();
		System.out.println(questions);
		return questions;
	}
		
	
	public Survey addSurvey(Survey quiz) {
		return surveyRepository.save(quiz);
		
	}
	

	public List<Survey> findAllSurveys() {
		List<Survey> surveys =  surveyRepository.findAll();
		System.out.println(surveys);
		return surveys;
	}

	public Survey findSurveyByName(String name) {
		return surveyRepository.findByName(name);
	}
}





/*

@Autowired
ChoiceRepository choiceRepository;

public List<Choice> findAllChoices() {
List<Choice> choices =  choiceRepository.findAll();
System.out.println(choices);
return choices;
}

@Transactional
public void updateChoice(Choice updatedChoice) {

Choice choice = choiceRepository.findById(updatedChoice.getId());
choice.setCount(updatedChoice.getCount());
choice.setChoice_text(updatedChoice.getChoice_text());
}
*/
package com.project.demo.survey.entities;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Question {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	int id;
	String question_text;
	String surveyName;
	@OneToMany(cascade=CascadeType.ALL)
	List<Choice> choices;
	public String getQuestion_text() {
		return question_text;
	}
	public void setQuestion_text(String question_text) {
		this.question_text = question_text;
	}
	public String getSurveyName() {
		return surveyName;
	}
	public void setSurveyName(String surveyName) {
		this.surveyName = surveyName;
	}
	public List<Choice> getChoices() {
		return choices;
	}
	public void setChoices(List<Choice> choices) {
		this.choices = choices;
	}
	public Question(int id, String question_text, String surveyName, List<Choice> choices) {
		super();
		this.id = id;
		this.question_text = question_text;
		this.surveyName = surveyName;
		this.choices = choices;
	}
	public Question(String question_text, String surveyName, List<Choice> choices) {
		super();
		this.question_text = question_text;
		this.surveyName = surveyName;
		this.choices = choices;
	}
	public Question() {
		
	}
	
	@Override
	public String toString() {
		return "Question [id=" + id + ", question_text=" + question_text + ", surveyName=" + surveyName + ", choices="
				+ choices + "]";
	}
	
	
	
}
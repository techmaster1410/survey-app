package com.project.demo.survey.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Choice {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	int id;
	String surveyName;
	String choice_text;
	int count;
	public Choice(){
		
	}
	
	
	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}


	public String getSurveyName() {
		return surveyName;
	}
	public void setSurveyName(String surveyName) {
		this.surveyName = surveyName;
	}
	public String getChoice_text() {
		return choice_text;
	}
	public void setChoice_text(String choice_text) {
		this.choice_text = choice_text;
	}
	public int getCount() {
		return count;
	}
	public void setCount(int count) {
		this.count = count;
	}
	public Choice(int id, String surveyName, String choice_text, int count) {
		super();
		this.id = id;
		this.surveyName = surveyName;
		this.choice_text = choice_text;
		this.count = count;
	}
	public Choice(String surveyName, String choice_text, int count) {
		super();
		this.surveyName = surveyName;
		this.choice_text = choice_text;
		this.count = count;
	}
	
	
	@Override
	public String toString() {
		return "Choice [id=" + id + ", surveyName=" + surveyName + ", choice_text=" + choice_text + ", count=" + count
				+ "]";
	}
	
	
	
	
	
}
	
	

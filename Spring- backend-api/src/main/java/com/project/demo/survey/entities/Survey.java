package com.project.demo.survey.entities;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Survey {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	int id;
	
	String name;
	
//	@OneToMany(cascade=CascadeType.ALL)
//	List<Question> questions;
	
	String question;
	@OneToMany(cascade=CascadeType.ALL)
	List<Choice> choices;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getQuestion() {
		return question;
	}
	public void setQuestion(String question) {
		this.question = question;
	}
	public List<Choice> getChoices() {
		return choices;
	}
	public void setChoices(List<Choice> choices) {
		this.choices = choices;
	}
	public Survey(int id, String name, String question, List<Choice> choices) {
		super();
		this.id = id;
		this.name = name;
		this.question = question;
		this.choices = choices;
	}
	public Survey(String name, String question, List<Choice> choices) {
		super();
		this.name = name;
		this.question = question;
		this.choices = choices;
	}
	
	
   public Survey() {
	   
   }
}
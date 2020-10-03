package com.project.demo.survey.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.demo.survey.entities.Survey;


public interface SurveyRepository extends JpaRepository<Survey, Integer>{
	public Survey findByName(String name);

}
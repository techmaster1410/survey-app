package com.project.demo.survey.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.demo.survey.entities.Choice;


//public interface ChoiceRepository extends JpaRepository<Choice, Integer>{
//	
//} 


public interface ChoiceRepository extends JpaRepository<Choice, Integer>{
public Choice findById(int id);
}
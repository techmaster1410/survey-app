package com.project.demo.survey.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.demo.survey.entities.Question;

public interface QuestionRepository extends JpaRepository<Question, Integer>{

}
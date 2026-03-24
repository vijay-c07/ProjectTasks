package com.company.Server.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.company.Server.model.Feedback;

public interface FeedbackRepository extends MongoRepository<Feedback, String> {
}
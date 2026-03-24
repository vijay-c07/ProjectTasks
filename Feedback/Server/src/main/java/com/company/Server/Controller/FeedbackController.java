package com.company.Server.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.company.Server.model.Feedback;
import com.company.Server.repository.FeedbackRepository;

@RestController
@CrossOrigin
public class FeedbackController {

    @Autowired
    private FeedbackRepository feedbackRepository;

    // POST API → Save feedback
    @PostMapping("/feedback")
    public Feedback saveFeedback(@RequestBody Feedback feedback) {
        return feedbackRepository.save(feedback);
    }

    // GET API → Get all feedback
    @GetMapping("/feedback")
    public List<Feedback> getAllFeedback() {
        return feedbackRepository.findAll();
    }
}
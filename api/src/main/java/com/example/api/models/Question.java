package com.example.api.models;

import com.example.api.responses.OptionContract;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
@Table(name = "question")
public class Question implements OptionContract {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String difficultyRating;
    private String questionUrl;
    private String answerURL;
    private String answer;
    private String additionalInstructions;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getDifficultyRating() {
        return difficultyRating;
    }

    public void setDifficultyRating(String difficultyRating) {
        this.difficultyRating = difficultyRating;
    }

    public String getQuestionUrl() {
        return questionUrl;
    }

    public void setQuestionUrl(String questionUrl) {
        this.questionUrl = questionUrl;
    }

    public String getAnswerURL() {
        return answerURL;
    }

    public void setAnswerURL(String answerURL) {
        this.answerURL = answerURL;
    }

    public String getAnswer() {
        return answer;
    }

    public void setAnswer(String answer) {
        this.answer = answer;
    }

    public String getAdditionalInstructions() {
        return additionalInstructions;
    }

    public void setAdditionalInstructions(String additionalInstructions) {
        this.additionalInstructions = additionalInstructions;
    }

    @Override
    public String toString() {
        return "questions{" +
                "id=" + id +
                ", difficultyRating=" + difficultyRating +
                ", questionUrl='" + questionUrl + '\'' +
                ", answerURL='" + answerURL + '\'' +
                ", answer='" + answer + '\'' +
                ", additionalInstructions='" + additionalInstructions + '\'' +
                '}';
    }
}

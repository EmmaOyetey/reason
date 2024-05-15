package com.example.api.models;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "question")
public class Question  {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String difficultyRating;
    private String questionUrl;
    private String additionalInstructions;
    private String answer;
    private String answerURL;
    private String explanation;
    private LocalDate dateAdded = LocalDate.now();

    public long getId() {
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

    public String getAdditionalInstructions() {
        return additionalInstructions;
    }

    public void setAdditionalInstructions(String additionalInstructions) {
        this.additionalInstructions = additionalInstructions;
    }

    public String getAnswer() {
        return answer;
    }

    public void setAnswer(String answer) {
        this.answer = answer;
    }

    public String getAnswerURL() {
        return answerURL;
    }

    public void setAnswerURL(String answerURL) {
        this.answerURL = answerURL;
    }

    public String getExplanation() {
        return explanation;
    }

    public void setExplanation(String explanation) {
        this.explanation = explanation;
    }

    public LocalDate getDateAdded() {
        return dateAdded;
    }

    public void setDateAdded(LocalDate dateAdded) {
        this.dateAdded = dateAdded;
    }

    @Override
    public String toString() {
        return "Question{" +
                "id=" + id +
                ", difficultyRating='" + difficultyRating + '\'' +
                ", questionUrl='" + questionUrl + '\'' +
                ", additionalInstructions='" + additionalInstructions + '\'' +
                ", answer='" + answer + '\'' +
                ", answerURL='" + answerURL + '\'' +
                ", explanation='" + explanation + '\'' +
                ", dateAdded=" + dateAdded +
                '}';
    }
}

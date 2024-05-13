package com.example.api.models;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "personalProgress")
public class PersonalProgress {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private boolean isCompleted = false;
    private boolean isCorrect = false;
    private LocalDate dateCompleted = LocalDate.now;

    @Column(name = "question_id")
    private int questionId;

    @OneToOne
    @JoinColumn(name = "question_id", insertable = false, updatable = false)
    private Question question;

    @Column(name = "user_id")
    private long userId;

    @OneToOne
    @JoinColumn(name = "user_id", insertable = false, updatable = false)
    private User user;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public boolean isCompleted() {
        return isCompleted;
    }

    public void setCompleted(boolean completed) {
        this.isCompleted = completed;
    }

    public boolean isCorrect() {
        return isCorrect;
    }

    public void setCorrect(boolean correct) {
        this.isCorrect = correct;
    }

    public LocalDate getDateCompleted() {
        return dateCompleted;
    }

    public void setDateCompleted(LocalDate dateCompleted) {
        this.dateCompleted = dateCompleted;
    }

    public int getQuestionId() {
        return questionId;
    }

    public void setQuestionId(int questionId) {
        this.questionId = questionId;
    }

    public Question getQuestion() {
        return question;
    }

    public void setQuestion(Question question) {
        this.question = question;
    }

    public long getUserId() {
        return userId;
    }

    public void setUserId(long userId) {
        this.userId = userId;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    @Override
    public String toString() {
        return "PersonalProgress{" +
                "id=" + id +
                ", isCompleted=" + isCompleted +
                ", isCorrect=" + isCorrect +
                ", dateCompleted=" + dateCompleted +
                ", questionId=" + questionId +
                ", question=" + question +
                ", userId=" + userId +
                ", user=" + user +
                '}';
    }
}



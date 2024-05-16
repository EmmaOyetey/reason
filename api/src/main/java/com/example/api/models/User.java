package com.example.api.models;


import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private int schoolYear;
    private String school;
    private String firstName;
    private String userName;
    private LocalDate dateRegistered = LocalDate.now();

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public int getSchoolYear() {
        return schoolYear;
    }

    public void setSchoolYear(int schoolYear) {
        this.schoolYear = schoolYear;
    }

    public String getSchool() {
        return school;
    }

    public void setSchool(String school) {
        this.school = school;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public LocalDate getDateRegistered() {
        return dateRegistered;
    }

    public void setDateRegistered(LocalDate dateRegistered) {
        this.dateRegistered = dateRegistered;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", schoolYear=" + schoolYear +
                ", school='" + school + '\'' +
                ", firstName='" + firstName + '\'' +
                ", userName='" + userName + '\'' +
                ", dateRegistered=" + dateRegistered +
                '}';
    }
}
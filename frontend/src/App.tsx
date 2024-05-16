import "./App.scss";

import Home from "./containers/Home/Home";
import Nav from "./components/Nav/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ViewQuestions from "./containers/ViewQuestions/ViewQuestions";
import CreateUser from "./containers/CreateUser/CreateUser";
//import AttemptQuestion from "./containers/AttemptQuestion/AttemptQuestion";

import { useEffect, useState } from "react";
import QuestionResponse from "./types/Question/QuestionResponse";

//import OptionType from "./types/OptionType";

const App = () => {
  //const [questions, setQuestions] = useState<OptionType[]>([]);
  const [schools, setSchools] = useState<QuestionResponse[]>([]);
  const [questions, setQuestions] = useState<QuestionResponse[]>([]);
  //const [difficultyRating, setDifficultyRating] = useState<OptionType[]>([]);
  
  const getQuestions = async () => {
    const response = await fetch("http://localhost:8080/questions");
    const questionData = await response.json();
    setQuestions(questionData);
  };

  const getSchools = async () => {
    const response = await fetch("http://localhost:8080/schools");
    const schoolData = await response.json();
    setSchools(schoolData);
  };

  // const getDifficultyRating = async () => {
  //   const response = await fetch("http://localhost:8080/reason/questions/difficultyRating");
  //   const DifficultyRatingData = await response.json();
  //   setDifficultyRating(DifficultyRatingData);

  useEffect(() => {
    getQuestions();
    getSchools();
    //getDifficultyRating();
  }, []);

  return ( 
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/questions" element={<ViewQuestions questions={questions} />} />
        <Route path="/questions/register" element={<CreateUser schools={schools}/>} /> 
      </Routes>
    </Router>
  );
};

export default App;


//<Route path="/questions/attempt/:id" element={<AttemptQuestion questions={questions} />} /> 
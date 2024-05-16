import "./App.scss";

import Home from "./containers/Home/Home";
import Nav from "./components/Nav/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ViewQuestions from "./containers/ViewQuestions/ViewQuestions";
import CreateUser from "./containers/CreateUser/CreateUser";
import AttemptQuestion from "./containers/AttemptQuestion/AttemptQuestion";


import { useEffect, useState } from "react";

import OptionType from "./types/OptionType";

const App = () => {
  const [questions, setQuestions] = useState<OptionType[]>([]);
  const [schools, setSchools] = useState<OptionType[]>([]);
  
  const getQuestions = async () => {
    const response = await fetch("http://localhost:8080/reason/questions");
    const questionData = await response.json();
    setQuestions(questionData);
  };

  const getSchools = async () => {
    const response = await fetch("http://localhost:8080/reason/schools");
    const schoolData = await response.json();
    setSchools(schoolData);
  };

  useEffect(() => {
    getQuestions();
    getSchools();
  }, []);

  return (
    <Router>
      <Nav navActionIndex={0} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/questions" element={<ViewQuestions questions={questions} />} />
        <Route path="/questions/attempt/:id" element={<AttemptQuestion questions={questions} />} />
        <Route path="/register" element={<CreateUser schools={schools}/>} /> 
      </Routes>
    </Router>
  );
};

export default App;

import "./App.scss";
//import ViewQuestions from "./containers/ViewQuestionsViewQuestions";
//import Home from "./containers/Home/Home";
import Nav from "./components/Nav/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import CreateQuestion from "./containers/CreateQuestion/CreateQuestion";
//import EditQuestion from "./containers/EditQuestion/EditQuestion";
//import { useEffect, useState } from "react";
import Home from "./containers/Home/Home";
//import OptionType from "./types/OptionType";

const App = () => {
  // const [users, setUsers] = useState<OptionType[]>([]);
  // const [questions, setQuestions] = useState<OptionType[]>([]);

  // const getUsers = async () => {
  //   const response = await fetch("http://localhost:8080/reason/users");
  //   const reasonData = await response.json();
  //   setUsers(reasonData);
  // };

  //
  // const getQuestions = async () => {
  //   const response = await fetch("http://localhost:8080/reason/questions");
  //   const reasonData = await response.json();
  //   setQuestions(reasonData);
  // };

  // useEffect(() => {
  //   getQuestions();
  //   getUsers();
  // }, []);

  return (
    <Router>
      <Nav navActionIndex={0} />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/greetings" element={<ViewQuestions questions={questions} />} />
        <Route path="/greeting/create" element={<CreateQuestion users={users} question={question} />} />
        <Route path="/greeting/edit/:id" element={<EditGreeting users={users} countries={countries} />} /> */}
      </Routes>
    </Router>
  );
};

export default App;

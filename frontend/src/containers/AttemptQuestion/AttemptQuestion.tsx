// import { useState, useEffect } from "react";
// import { useParams, useNavigate, useLocation } from "react-router-dom";
// import Form from "../../components/Form/Form";
// import Question from "../../components/Question/Question";
// import "./AttemptQuestion.scss";
// //import Spinner from "../../components/Spinner/Spinner";
// import "./AttemptGreeting.scss";
// import AttemptQuestionRequest from "../../types/AttemptQuestion/AttemptQuestionRequest";
// import OptionType from "../../types/OptionType";
// import AttemptQuestionResponse from "../../types/AttemptQuestion/AttemptQuestionResponse";

// type AttemptQuestionProps = {
//   question: OptionType[];
// };

// const getFormAttemptQuestion = (attemptQuestion: AttemptQuestionResponse) => {
//   return {
//     id: attemptQuestion.id,
//     answer: attemptQuestion.answer,
//     nationality: attemptQuestion.explanation,
//     userId: attemptQuestion.userId,
//     countryId: attemptQuestion.questionId,
//   };
// };
// const AddAttempt = ({ question }: AttemptQuestionProps) => {
//   const { id } = useParams();
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [attempt, setAttempt] = useState<AttemptQuestionResponse | null>(null);
//   const [showForm, setShowForm] = useState(false);

//   const getQuestionById = async (id: number) => {
//     const url = `http://localhost:8080/question/${id}`;
//     const response = await fetch(url);
//     const questionData = await response.json();
//     setQuestion(questionData);
//   };

//   useEffect(() => {
//     if (location.state) {
//       setQuestion(location.state);
//     } else {
//       getQuestionById(Number(id));
//     }
//   }, [id, location]);

//   const handleQuestionAttempt = async (questionAttempt: AttemptQuestionRequest) => {
//     const result = await fetch(`http://localhost:8080/question/${id}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(questionAttempt),
//     });

//     if (result.ok) {
//       alert("Question Attempted");
//       const attempt = await result.json();
//       setAttempt(attempt);
//     } else {
//       const message = await result.text();
//       alert(message);
//     }
//   };

//   const handleDeleteGreeting = async () => {
//     const result = await fetch(`http://localhost:8080/greeting/${id}`, {
//       method: "DELETE",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     if (result.ok) {
//       alert("Greeting deleted");
//       navigate("/");
//     } else {
//       const message = await result.text();
//       alert(message);
//     }
//   };

//   const handleShowForm = () => setShowForm(!showForm);

//  // if (!greeting) return <Spinner />;

//   const formQuestionAttempt: GreetingRequest | null = greeting ? getFormGreeting(greeting) : null;

//   return (
//     <section className="attempt-question">
//       <h2 className="attempt-question__title">Attempt Question</h2>
//       <div className="attempt-question__content">
//         <Attempt attempt={attempt} />
//         <div className="attempt-question__button">
//           <button
//             className="attempt-question__button"
//             onClick={handleShowForm}
//           >
//             Update
//           </button>
//           <button className="edit-greeting__button edit-greeting__button--secondary" onClick={handleDeleteGreeting}>
//             Delete
//           </button>
//         </div>
//       </div>
//       {showForm && formGreeting && (
//         <Form
//           defaultFormState={formGreeting}
//           formTitle="Update greeting"
//           handleSubmit={handleUpdateGreeting}
//           countries={countries}
//           users={users}
//         />
//       )}
//     </section>
//   );
// };

// export default AttemptQuestion;

import QuestionResponse from "../../types/QuestionReponse";
import "./Question.scss";

type QuestionProp = {
  question: QuestionResponse;
};

const Question= ({ question }: QuestionProp) => {
  const {
    question : {questionUrl, difficultyRating} = {guestionUrl: "No", difficultyRating: "Question"}
  } = question;

  return (
    <div className={`Question ${questionUrl ? "question--overlay" : ""}`} style={{ backgroundImage: `url("${questionUrl}")` }}>
      <h3 className="greeting__title">{greetingText}</h3>
      <p className="greeting__text">Nationality: {nationality}</p>
      <p className="greeting__text">Usually spoken in: {name}</p>
      <p className="greeting__text">Added by: {`${firstName} ${lastName}`}</p>
    </div>
  );
};

export default Greeting;
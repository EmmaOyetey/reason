import "./QuestionList.scss";
import { Link } from "react-router-dom";
import Question from "../Question/Question";
import QuestionResponse from "../../types/Question/QuestionResponse";

type QuestionListProps = {
  questions: QuestionResponse[];
};

const QuestionList = ({ questions }: QuestionListProps) => {
  return (
    <>
      <div className="questions-list">
        {questions.map(question => (
          <Link key={question.id} to={`/questions/attempt/${question.id}`}>
            <Question question={question} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default QuestionList;
import QuestionResponse from "../../types/Question/QuestionResponse";
import "./Question.scss";

type QuestionProps = {
  question: QuestionResponse;
};

const Question= ({question} : QuestionProps) => {

  const{ id, questionUrl, additionalInstructions } = question;

  return (

        <div className ="question">
            <div className = "question__content">
                <div className ="question__image-container">
                    <img className = "question__image"
                    src={questionUrl} 
                    alt={'question ${id}'} />
                </div>
                <p className = "question__additional-instructions">{additionalInstructions}</p>
            </div>
        </div>
  );
};

export default Question;
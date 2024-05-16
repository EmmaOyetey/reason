import { useState, useEffect, ChangeEvent } from "react";
import "./ViewQuestion.scss";
import QuestionList from "../../components/QuestionList/QuestionList";
import Select from "../../components/Select/select";
// import Spinner from "../../components/Spinner/Spinner";
import OptionType from "../../types/OptionType";
import QuestionResponse from "../../types/Question/QuestionResponse";

type ViewQuestionsProps = {
  difficultyRating: OptionType[];
};

const DEFAULT_QUESTION_SELECT = "All questions";

const ViewQuestions = ({ difficultyRating }: ViewQuestionsProps) => {
  const [questions, setQuestions] = useState<QuestionResponse[]>([]);
  const [selectedDifficultyRating, setDifficultyRating] = useState<string>("");

  const getQuestions = async (difficultyRating: string, difficultyRatingArr: OptionType[]) => {
    let url = "http://localhost:8080/questions";

    if (difficultyRating && !difficultyRating.includes(DEFAULT_QUESTION_SELECT)) {
      const difficultyRatingParam = difficultyRatingArr.find(question => question.difficultyRating.toString() === difficultyRating)?.name;
      url += `?difficultyRating=${difficultyRatingParam}`;
    }

    const response = await fetch(url);
    const questionsData = await response.json();
    setQuestions(questionsData);
  };

  useEffect(() => {
    getQuestions(selectedDifficultyRating, difficultyRating);
  }, [selectedDifficultyRating, difficultyRating]);

  const handleSelectDifficultyRating = (event: ChangeEvent<HTMLSelectElement>) => {
    setDifficultyRating(event.currentTarget.value);
  };

 // const isLoading = !(questions.length > 0) && !(questions.length > 0);

 // if (isLoading) return <Spinner />;

  return (
    <section className="view-questions">
      <h2 className="view-questions__title">All Questions...</h2>
      <form className="view-questions__form">
        <Select
          defaultOption={DEFAULT_QUESTION_SELECT}
          defaultValue={selectedDifficultyRating}
          options={difficultyRating}
          onChange={handleSelectDifficultyRating}
          label="questions"
          labelText="Select a Question : "
        />
      </form>
      <QuestionList questions={questions} />
    </section>
  );
};

export default ViewQuestions;
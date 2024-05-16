import { useState, useEffect, ChangeEvent } from "react";
import "./ViewQuestions.scss";
import QuestionList from "../../components/QuestionList/QuestionList";
import Select from "../../components/Select/select";
import QuestionResponse from "../../types/Question/QuestionResponse";

type ViewQuestionsProps = {
  questions: QuestionResponse[];
};

const DEFAULT_QUESTION_SELECT = "All questions";

const ViewQuestions = ({ questions }: ViewQuestionsProps) => {
  const [filteredQuestions, setFilteredQuestions] = useState<QuestionResponse[]>(questions);
  const [selectedDifficultyRating, setSelectedDifficultyRating] = useState<string>("");

  const getUniqueDifficultyRatings = () => {
    const uniqueDifficultyRatings = Array.from(new Set(questions.map(question => question.difficultyRating)));
    return uniqueDifficultyRatings;
  };

  const getQuestions = async (difficultyRating: string) => {
    let url = "http://localhost:8080/questions";

    if (difficultyRating && difficultyRating !== DEFAULT_QUESTION_SELECT) {
      url += `?difficultyRating=${difficultyRating}`;
    }

    const response = await fetch(url);
    const questionsData = await response.json();
    setFilteredQuestions(questionsData);
  };

  useEffect(() => {
    getQuestions(selectedDifficultyRating);
  }, [selectedDifficultyRating]);

  const handleSelectDifficultyRating = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedDifficultyRating(event.currentTarget.value);
  };

  return (
    <section className="view-questions">
      <h2 className="view-questions__title">All Questions...</h2>
      <form className="view-questions__form">
        <label htmlFor="difficulty" className="view-questions__label">Select a Difficulty :</label>
        <Select
          classname="view-questions__select"
          defaultOption={DEFAULT_QUESTION_SELECT}
          defaultValue={selectedDifficultyRating}
          options={["All", ...getUniqueDifficultyRatings()]} // Adjust the options here
          onChange={handleSelectDifficultyRating}
          label="questions"
          labelText="Select a Difficulty : "
        />
      </form>
      <QuestionList questions={filteredQuestions} />
    </section>
  );
};

export default ViewQuestions;

// import { useState, useEffect, ChangeEvent } from "react";
// import "./ViewQuestions.scss";
// import QuestionList from "../../components/QuestionList/QuestionList";
// import Select from "../../components/Select/select";
// import QuestionResponse from "../../types/Question/QuestionResponse";

// type ViewQuestionsProps = {
//   questions: QuestionResponse[];
// };

// const DEFAULT_QUESTION_SELECT = "All questions";

// const ViewQuestions = ({ questions }: ViewQuestionsProps) => {
//   const [filteredQuestions, setFilteredQuestions] = useState<QuestionResponse[]>([]);
//   const [selectedDifficultyRating, setSelectedDifficultyRating] = useState<string>("");

//   useEffect(() => {
//     setFilteredQuestions(questions);
//   }, [questions]);

//   const getUniqueDifficultyRatings = () => {
//     const uniqueDifficultyRatings = Array.from(new Set(questions.map(question => question.difficultyRating)));
//     return uniqueDifficultyRatings;
//   };

//   const filterQuestionsByDifficulty = (difficulty: string) => {
//     if (difficulty === DEFAULT_QUESTION_SELECT) {
//       setFilteredQuestions(questions);
//     } else {
//       const filtered = questions.filter(question => question.difficultyRating === difficulty);
//       setFilteredQuestions(filtered);
//     }
//   };

//   const handleSelectDifficultyRating = (event: ChangeEvent<HTMLSelectElement>) => {
//     const selectedRating = event.currentTarget.value;
//     setSelectedDifficultyRating(selectedRating);
//     filterQuestionsByDifficulty(selectedRating);
//   };

//   return (
//     <section className="view-questions">
//       <h2 className="view-questions__title">All Questions...</h2>
//       <form className="view-questions__form">
//         <Select
//           defaultOption={DEFAULT_QUESTION_SELECT}
//           defaultValue={selectedDifficultyRating}
//           options={[DEFAULT_QUESTION_SELECT, ...getUniqueDifficultyRatings()]} // Include the default option
//           onChange={handleSelectDifficultyRating}
//           label="questions"
//           labelText="Select a Question : "
//         />
//       </form>
//       <QuestionList questions={filteredQuestions} />
//     </section>
//   );
// };

// export default ViewQuestions;


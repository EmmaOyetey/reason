type QuestionRequest = {
    id: number;
    difficultyRating: String;
    questionUrl: string;
    answer: string;
    additionalInstructions?: string;
    explanation?: string;
  };
  
  export default QuestionRequest;
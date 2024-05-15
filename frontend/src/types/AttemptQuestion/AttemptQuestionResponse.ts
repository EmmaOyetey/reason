type AttemptQuestionResponse = {
    id: number;
    answer: string;
    isCorrect: boolean;
    explanation?: string;
    questionId: number;
    userId: number;
    user: { id: number; user_name : string };
    question: { id: number; answer: string; explanation: string };
  };
  
  export default AttemptQuestionResponse;

  
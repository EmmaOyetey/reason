import { ChangeEvent, FormEvent, useState } from "react";
import "./Form.scss";
//import QuestionRequest from "../../types/QuestionRequest";
import OptionType from "../../types/OptionType";
import Select from "../../components/Select/select";

/* 
  Form styles borrowed from: 
  https://codepen.io/banunn/pen/AFnal
*/

type FormProps = {
  defaultFormState: QuestionRequest;
  formTitle: string;
  handleSubmit: (question: QuestionRequest) => void;
  users: OptionType[];
  difficulty_rating: OptionType[];
};

const Form = ({ defaultFormState, handleSubmit, formTitle, users, countries }: FormProps) => {
  const [greeting, setGreeting] = useState<GreetingRequest>(defaultFormState);

  const handleValidation = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (Object.values(greeting).some(value => !value)) {
      alert("Missing content, unable to proceed");
      return;
    }

    handleSubmit(greeting);
  };

  const handleInput = (event: FormEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>, key: string) =>
    setGreeting({ ...greeting, [key]: event.currentTarget.value });

  return (
    <div className="form-container">
      <h2 className="form-container__title">{formTitle}</h2>
      <form className="form-container__form" onSubmit={handleValidation}>
        <Select
          labelText={"Select User : "}
          label={"userId"}
          options={users}
          onChange={event => handleInput(event, "userId")}
          defaultOption={"---"}
          defaultValue={greeting.userId.toString()}
        />
        <Select
          labelText={"Select Country : "}
          label={"countryId"}
          options={countries}
          onChange={event => handleInput(event, "countryId")}
          defaultOption={"---"}
          defaultValue={greeting.countryId.toString()}
        />
        <label htmlFor="greeting">Greeting : </label>
        <input
          id="greeting"
          className="form-container__input"
          type="text"
          placeholder="greeting"
          value={greeting.greeting}
          onInput={event => handleInput(event, "greeting")}
        />
        <label htmlFor="nationality">Nationality : </label>
        <input
          id="nationality"
          className="form-container__input"
          type="text"
          placeholder="nationality"
          value={greeting.nationality}
          onInput={event => handleInput(event, "nationality")}
        />
        <button type="submit" className="form-container__button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
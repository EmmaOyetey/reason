import { ChangeEvent, FormEvent, useState } from "react";
import "./Form.scss";
import UserRequest from "../../types/User/UserRequest";
//import OptionType from "../../types/OptionType";
import Select from "../../components/Select/select";
import SchoolResponse from "../../types/School/SchoolResponse";

type FormProps = {
  defaultFormState: UserRequest;
  formTitle: string;
  handleSubmit: (user: UserRequest) => void;
  schools: SchoolResponse[];
};

const Form = ({
  defaultFormState,
  handleSubmit,
  formTitle,
  schools,
}: FormProps) => {
  const [user, setUser] = useState<UserRequest>(defaultFormState);

  const handleValidation = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (Object.values(user).some((value) => !value)) {
      alert("Missing content, unable to proceed");
      return;
    }

    handleSubmit(user);
  };

  const handleInput = (
    event: FormEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>,
    key: string
  ) => setUser({ ...user, [key]: event.currentTarget.value });

  return (
    <div className="form-container">
      <h2 className="form-container__title">{formTitle}</h2>
      <form className="form-container__form" onSubmit={handleValidation}>
        <Select
          classname="form-container__select"
          labelText={"Select School : "}
          label={"schoolId"}
          options={schools}
          onChange={(event) => handleInput(event, "schoolId")}
          defaultOption={"---"}
          defaultValue={user.schoolId.toString()}
        />
        <label htmlFor="First name">First Name : </label>
        <input
          id="first_name"
          className="form-container__input"
          type="text"
          placeholder="First Name"
          value={user.firstName}
          onInput={(event) => handleInput(event, "firstName")}
        />
        <label htmlFor="user name">User Name : </label>
        <input
          id="user_name"
          className="form-container__input"
          type="text"
          placeholder="User Name"
          value={user.userName}
          onInput={(event) => handleInput(event, "userName")}
        />
        <button type="submit" className="form-container__button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;

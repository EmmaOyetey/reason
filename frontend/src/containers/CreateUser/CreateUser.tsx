import "./CreateGreeting.scss";
import Form from "../../components/Form/Form";
import UserRequest from "../../types/User/UserRequest";
import OptionType from "../../types/OptionType";
import { useNavigate } from "react-router-dom";

type CreateUserProps = {
  schools: OptionType[];
};

const CreateUser = ({ schools }: CreateUserProps) => {
  const navigate = useNavigate();

  const handleSubmit = async (newUser: UserRequest) => {
    const result = await fetch("http://localhost:8080/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });

    if (result.ok) {
      alert("User added");
      const user = await result.json();
      navigate("/user/edit/" + user.id, { state: user });
    } else {
      const message = await result.text();
      alert(message);
    }
  };

  const defaultFormState = {
    id: -1,
    schoolId: -1,
    firstName: "",
    userName: "",
    schoolYear: "",
  };
  return (
    <section className="create-user">
      <h2 className="create-user__title">
        Register to keep track of your progress
      </h2>
      <Form
        handleSubmit={handleSubmit}
        defaultFormState={defaultFormState}
        formTitle="Add A New Greeting"
        schools={schools}
      />
    </section>
  );
};

export default CreateUser;

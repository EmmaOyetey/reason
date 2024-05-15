import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import "./Home.scss";
import Navigation from "../../components/Nav/Nav";


const Home = () => {
//   const { getUser } = useAuth();
//   const user = getUser();
  // "today" shows current day, only used in the Home page.
  const today = new Date(),
    date =
      today.getDate() +
      " " +
      today.toLocaleString("default", { month: "long" }) +
      " " +
      today.getFullYear();

  return (
    <div>
      <Header subtitle="Home" date={date} />
      <section className="home">
        
        <h2 className="home__header">
        REASON
        </h2>
        <h3 className="home__intro">
          Your ultimate platform for mastering logic reasoning
        </h3>
        <p className="home__paragraph">
          Dive into a vibrant community and a diverse array of challenging questions suited to all skill levels. 
        </p>
        <blockquote className="home__quote">
          <strong>
           Reason empowers you to learn your way.
        
          </strong>
        </blockquote>
        <p className="home__paragraph">
           Whether you crave brain-teasing challenges or prefer refining your skills through practice, 
           Reason empowers you to learn your way. Compare your solutions with fellow users, glean insights, 
           and mentor others as you embark on your journey to logic mastery.
           Ready to embark on your logic journey? Join us and  
           Get ready to unlockaccess to (will be!) an extensive library of challenges. 
           elevate your reasoning skills and tackle the toughest puzzles Reason has to offer!
        </p>
        <div className="home__questions-button">
          <Link to="/questions">
            <Button label="VIEW QUESTIONS" variant="primary"></Button>
          </Link>
        </div>
      </section>
      <Navigation navActionIndex={0} />
    </div>
  );
};

export default Home;
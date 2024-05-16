import { useState, useEffect, ChangeEvent } from "react";
import "./ViewQuestion.scss";
import QuestionList from "../../components/GreetingList/GreetingList";
import Select from "../../components/Select/Select";
import Spinner from "../../components/Spinner/Spinner";
import OptionType from "../../types/OptionType";
import GreetingResponse from "../../types/GreetingResponse";

type ViewGreetingsProps = {
  countries: OptionType[];
};

const DEFAULT_COUNTRY_SELECT = "All Countries";

const ViewGreetings = ({ countries }: ViewGreetingsProps) => {
  const [greetings, setGreetings] = useState<GreetingResponse[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<string>("");

  const getGreetings = async (originCountry: string, countriesArr: OptionType[]) => {
    let url = "http://localhost:8080/greetings";

    if (originCountry && !originCountry.includes(DEFAULT_COUNTRY_SELECT)) {
      const countryParam = countriesArr.find(country => country.id.toString() === originCountry)?.name;
      url += `?countryName=${countryParam}`;
    }

    const response = await fetch(url);
    const greetingData = await response.json();
    setGreetings(greetingData);
  };

  useEffect(() => {
    getGreetings(selectedCountry, countries);
  }, [selectedCountry, countries]);

  const handleSelectCountry = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(event.currentTarget.value);
  };

  const isLoading = !(greetings.length > 0) && !(countries.length > 0);

  if (isLoading) return <Spinner />;

  return (
    <section className="view-greetings">
      <h2 className="view-greetings__title">All The Greetings In The World...</h2>
      <form className="view-greetings__form">
        <Select
          defaultOption={DEFAULT_COUNTRY_SELECT}
          defaultValue={selectedCountry}
          options={countries}
          onChange={handleSelectCountry}
          label="countries"
          labelText="Select a Country : "
        />
      </form>
      <GreetingList greetings={greetings} />
    </section>
  );
};

export default ViewGreetings;
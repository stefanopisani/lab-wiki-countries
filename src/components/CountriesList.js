//import countriesData from "./../countries.json";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const apiURL = "https://ih-countries-api.herokuapp.com/countries";

function CountriesList() {
  const [countries, setCountries] = useState([]);

  //   useEffect(() => {
  //     setCountries(countriesData);
  //   }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(apiURL);
      const countriesData = response.data;
      setCountries(countriesData);
    };

    fetchData();
  }, []);

  console.log("countries", countries);

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-5">
            <div className="list-group">
              {countries.map((country) => {
                return (
                  <div>
                    <p> -- If we find a flag -- </p>
                    <Link to={country.alpha3Code}>
                      <p> {country.name.official} </p>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountriesList;

import { useState, useEffect } from 'react';
import countriesJson from '../countries.json';
import { Link } from 'react-router-dom';
import axios from 'axios';

const apiURL = 'https://ih-countries-api.herokuapp.com/countries';

function CountriesList() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    //Use Data from internal Json file
    //setCountries(countriesJson);

    //Use Data from API
    const fetchData = async () => {
      const response = await axios.get(apiURL);
      const countriesData = response.data;

      setCountries(countriesData);
    };

    fetchData();
  }, []);

  return (
    <>
      {countries.map((oneCountry) => {
        return (
          <div key={oneCountry.alpha3Code} className="col-5">
            <div class="list-group">
              <Link
                class="list-group-item list-group-item-action mb-3"
                to={oneCountry.alpha3Code}
              >
                <img
                  src={`http://www.geognos.com/api/en/countries/flag/${oneCountry.alpha2Code}.png`}
                  alt="country flag"
                  style={{ width: '100px' }}
                />
                <p>{oneCountry.name.common}</p>
              </Link>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default CountriesList;

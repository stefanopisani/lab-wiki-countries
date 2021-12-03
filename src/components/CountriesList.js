import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

const apiURL = 'https://ih-countries-api.herokuapp.com/countries';

function CountriesList({ countriesData }) {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(apiURL);
      const countriesDataFromAPI = response.data;

      setCountries(countriesDataFromAPI);
    };
    fetchData();
  }, []);

  return (
    <div class="col-5" style={{ maxHeight: '90vh', overflow: 'hidden' }}>
      <div class="list-group">
        {countries.map((country) => (
          <Link
            to={'/' + country.alpha3Code}
            class="list-group-item list-group-item-action"
          >
          
            <img
              src={`http://www.geognos.com/api/en/countries/flag/${country.alpha2Code}.png`}
              alt="flag-img"
              width="50px"
            />
            <p>{country.name.common}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CountriesList;

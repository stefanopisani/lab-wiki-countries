import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
    <div class="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
      <div class="list-group">
        {countries.map((country) => (
          <Link
            class="list-group-item list-group-item-action"
            to={'/' + country.alpha3Code}
          >
            <img
              src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
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

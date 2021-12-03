import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import axios from 'axios';

const apiURL = 'https://ih-countries-api.herokuapp.com/countries';

function CountryDetails({ countriesData }) {
  const [foundCountry, setFoundCountry] = useState(null);

  const { alpha3Code } = useParams();

  useEffect(() => {
    const fetchOneCountry = async () => {
      const response = await axios.get(`${apiURL}/${alpha3Code}`);
      const countryDataFromAPI = response.data;

      setFoundCountry(countryDataFromAPI);
    };
    fetchOneCountry();
  }, [alpha3Code]);

  if (!foundCountry) return null;

  return (
    <div class="col-7">
      <img
        src={`https://flagpedia.net/data/flags/icon/72x54/${foundCountry.alpha2Code.toLowerCase()}.png`}
        alt="country flag"
        style={{ width: '100px' }}
      />
      <h1>{foundCountry.name.common}</h1>
      <table class="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{foundCountry.capital[0]}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {foundCountry.area} km <sup>2</sup>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CountryDetails;

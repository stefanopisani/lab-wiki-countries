import { useState, useEffect } from 'react';
import { useParams, Link, Navigate, useNavigate } from 'react-router-dom';
import countriesJson from '../countries.json';
import axios from 'axios';

const apiURL = 'https://ih-countries-api.herokuapp.com/countries';

function CountriesDetails() {
  const [foundCountry, setFoundCountry] = useState(null);

  const { countryId } = useParams();

  useEffect(() => {
    //Use Data from internal Json file
    // const theCountry = countriesJson.find((oneCountry) => {
    //   if (oneCountry.alpha3Code === countryId) {
    //     return true;
    //   }
    // });

    // setFoundCountry(theCountry);

    //Use Data from API
    const fetchData = async () => {
      const response = await axios.get(apiURL);
      const countriesData = response.data;

      const theCountry = countriesData.find((oneCountry) => {
        if (oneCountry.alpha3Code === countryId) {
          return true;
        }
      });

      setFoundCountry(theCountry);
    };

    fetchData();
  }, [countryId]); // <= updates when countryId params changes

  if (!foundCountry) return null;

  // FUNCTIONS
  const showCountryName = (countryCode) => {
    const neighborCountry = countriesJson.find(
      (oneCountry) => oneCountry.alpha3Code === countryCode
    );
    return neighborCountry.name.common;
  };

  return (
    <div class="col-6">
      <img
        src={`http://www.geognos.com/api/en/countries/flag/${foundCountry.alpha2Code}.png`}
        alt="country flag"
      />
      <h1>{foundCountry.name.common}</h1>
      <table class="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{foundCountry.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {foundCountry.area} km <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul className="borders-list">
                {foundCountry.borders.map((neighborCode) => (
                  <li>
                    <Link to={`/${neighborCode}`}>
                      {showCountryName(neighborCode)}
                    </Link>
                  </li>
                ))}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CountriesDetails;

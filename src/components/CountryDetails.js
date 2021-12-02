import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const apiURL = 'https://ih-countries-api.herokuapp.com/countries';

function CountryDetails({ countriesData }) {
  const [countryDetail, setCountryDetail] = useState(null);

  const { alpha3Code } = useParams();

  useEffect(() => {
    const fetchOneCountry = async () => {
      const response = await axios.get(`${apiURL}/${alpha3Code}`);
      const countryDataFromAPI = response.data;

      setCountryDetail(countryDataFromAPI);
    };

    fetchOneCountry();
  }, [alpha3Code]);

  if (!countryDetail) return null;

  return (
    <div class="col-7">
      <img
        src={`https://flagpedia.net/data/flags/icon/72x54/${countryDetail.alpha2Code.toLowerCase()}.png`}
        alt="country flag"
        style={{ width: '100px' }}
      />
      <h1>{countryDetail.name.common}</h1>
      <table class="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{countryDetail.capital[0]}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {countryDetail.area} km <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {countryDetail &&
                  countryDetail.borders.map((countryAlpha3Code) => (
                    <li>
                      <Link to={'/' + countryAlpha3Code}>
                        {
                          countriesData.find(
                            (c) => c.alpha3Code === countryAlpha3Code
                          ).name.common
                        }
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

export default CountryDetails;

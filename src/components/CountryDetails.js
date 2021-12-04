import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const CountryDetails = ({ countriesData }) => {
  const [country, setCountry] = useState(null);

  const { alpha3Code } = useParams();

  useEffect(() => {
    const theCountry = countriesData.find((oneCountry) => {
      return oneCountry.alpha3Code === alpha3Code;
    });
    setCountry(theCountry);
    console.log(country);
  }, [alpha3Code]);

  return (
    <div className="details">
      {!country && <p>isLoading</p>}

      {country && (
        <div className="details">
          <img
            src={`http://www.geognos.com/api/en/countries/flag/${country.alpha2Code}.png`}
            alt="country flag"
          />
          <h1>{country.name.common}</h1>
          <table className="table">
            <thead></thead>
            <tbody>
              <tr>
                <td>Capital</td>
                <td>{country.capital[0]}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>
                  {country.area} km <sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  <ul>
                    {country &&
                      country.borders.map((element) => (
                        <li>
                          <Link to={`/${element}`}>
                            {
                              countriesData.find(
                                (c) => c.alpha3Code === element
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
      )}
    </div>
  );
};

export default CountryDetails;

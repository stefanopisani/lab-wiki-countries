import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function CountriesList({ countries }) {
  const [allCountries, setAllCountries] = useState([]);

  useEffect(() => {
    setAllCountries(countries);
  }, []);

  return (
    <div className="col-5">
      <div class="list-group">
        {allCountries.map((oneCountry) => {
          return (
            <div key={oneCountry.name}>
              <Link to={'/' + oneCountry.alpha3Code}>
                <img
                  src={
                    'http://www.geognos.com/api/en/countries/flag/' +
                    oneCountry.alpha2Code +
                    '.png'
                  }
                  alt="flag"
                />
                <p>{oneCountry.name.common}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CountriesList;

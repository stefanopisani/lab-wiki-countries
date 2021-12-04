import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function CountriesList({ countriesData }) {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    setCountries(countriesData);
  }, []);

  return (
    <div key="list" className="list">
      {countries.map((element) => {
        return (
          <Link key={element.alpha3Code} to={`/${element.alpha3Code}`}>
            <div className="card">
              {/* Flag */}
              <img
                src={`http://www.geognos.com/api/en/countries/flag/${element.alpha2Code}.png`}
                alt="flag"
              />
              {/* Name */}
              <p>{element.name.common}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default CountriesList;

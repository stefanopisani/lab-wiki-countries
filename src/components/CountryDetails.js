import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function CountryDetails({ countriesData }) {
  const [foundCountry, setFoundCountry] = useState(null);

  const { alpha3Code } = useParams();

  useEffect(() => {
    //  Use data passed from the props
    const theCountry = countriesData.find((oneCountry) => {
      return oneCountry.alpha3Code === alpha3Code;
    });
    setFoundCountry(theCountry);
  }, [alpha3Code]);

  console.log(foundCountry);
  return (
    <div class="col-7">
      <h1>{foundCountry.name.common}</h1>
    </div>
  );
}

export default CountryDetails;

import countriesData from "./../countries.json";
import { useState, useEffect } from "react";
// import axios from "axios";

import { useParams, Link } from "react-router-dom";

// const apiURL = "https://ih-countries-api.herokuapp.com/countries";

function CountryDetails() {
  const [foundCountry, setFoundCountry] = useState({});

  //const { alpha3Code } = useParams();

  const { countryId } = useParams();

  useEffect(() => {
    const foundCountryDetails = countriesData.find((oneCountry) => {
      if (oneCountry.alpha3Code === countryId) {
        return true;
      }
    });
    console.log("foundCountryDetails", foundCountryDetails);
    setFoundCountry(foundCountryDetails);
  }, []);

  //   useEffect(() => {
  //     const fetchCountry = async () => {
  //       const response = await axios.get(`${apiURL}/${alpha3Code}`);
  //       const foundCountryDetails = response.data;

  //       setFoundCountry(foundCountryDetails);

  //       console.log("foundCountryDetails", foundCountryDetails);
  //     };

  //     fetchCountry();
  //   }, [alpha3Code]);

  console.log("foundCountry", foundCountry);

  if (!foundCountry) return null;

  return (
    <div>
      <div className="col-7">
        <img
          src={
            "http://www.geognos.com/api/en/countries/flag/" +
            foundCountry.alpha2Code +
            ".png"
          }
          alt="country flag"
        />

        <h1>
          {" "}
          {foundCountry.name ? foundCountry.name.official : "Cannot find name"}
        </h1>
        <table className="table">
          <tbody>
            <tr>
              <td>Capital</td>
              <td>{foundCountry.capital ? foundCountry.capital.[0] : "No available info"}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {foundCountry.area} km <sup>2</sup>{" "}
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td> This is the part that is not working to call name/ .map is breaking
               
              {/* <ul>
                {foundCountry &&
                  foundCountry.borders.map((countryCode) => (
                    <li>
                      <Link to={'/' + countryCode}>
                        {
                          countriesData.find(
                            (code) => code.alpha3Code === countryCode
                          ).name.common
                        }
                      </Link>
                    </li>
                  ))}
              </ul> */}
            </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CountryDetails;

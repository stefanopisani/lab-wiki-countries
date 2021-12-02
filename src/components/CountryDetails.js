import countriesData from "./../countries.json";
import { useState, useEffect } from "react";

import { useParams, useNavigate, Navigate, Link } from "react-router-dom";

function CountryDetails() {
  const [foundCountry, setFoundCountry] = useState({});

  const { countryId } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const foundCountryDetails = countriesData.find((oneCountry) => {
      if (oneCountry.alpha3Code === countryId) {
        return true;
      }
    });
    console.log("foundCountryDetails", foundCountryDetails);
    setFoundCountry(foundCountryDetails);
  }, []);

  console.log("foundCountry", foundCountry);
  //   console.log("name", foundCountry.name.official);
  //   console.log("capital", foundCountry.capital[0]);
  //   console.log("area", foundCountry.area);
  //   console.log("border", foundCountry.borders);

  return (
    <div>
      <div className="col-7">
        <img src="" alt="country flag" />
        <h1> {foundCountry.name.common}</h1>
        <table className="table">
          <tbody>
            <tr>
              <td>Capital</td>
              <td>{foundCountry.capital[0]}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {foundCountry.area} km <sup>2</sup>{" "}
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <>Something here//this is giving an error for now</>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </button>{" "}
      */}
    </div>
  );
}

export default CountryDetails;

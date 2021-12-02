import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';


function CountryDetails({ countriesJSON }) {
    const [foundCountry, setFoundCountry] = useState(null);

    const { alpha3Code } = useParams();

    useEffect((countriesJSON) => {
        const theCountry = countriesJSON.find((oneCountry) => {
            return oneCountry.alpha3Code === alpha3Code;
        });
        setFoundCountry(theCountry);
    }, [alpha3Code]);

    if (!foundCountry) {
        return null
    }

    return (
        <div class="col-7">
            <img
                src={`http://www.geognos.com/api/en/countries/flag/${foundCountry.alpha23Code}.png`}
                alt="country flag"
                style={{ width: '100px' }}
            />
            <h1>{foundCountry.name.common}</h1>

            <table class="table">
                <thead></thead>
                <tbody>
                    <tr>
                        <td style={{ width: '30%' }} >Capital</td>
                        <td> {foundCountry.capital[0]} </td>
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
                            <ul>
                                {foundCountry &&
                                    foundCountry.borders.map((countryAlpha3Code) => (
                                        <li>
                                            <Link to={'/' + countryAlpha3Code}>
                                                {
                                                    countriesJSON.find(
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
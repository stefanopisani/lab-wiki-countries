import { useState, useEffect } from "react";
import countriesJson from '../countries.json';
import { Link } from "react-router-dom";


function CountriesList() {
const [countries, setCountries] = useState([]);

useEffect(() => {
    setCountries(countriesJson);
}, [])

    return ( 
        <div class="container">
        <div class="row">
            <h2>List</h2>
            {countries.map((oneCountry) => {
                return (
                <div key={oneCountry.alpha3Code} className="col-5">
                    <div class="list-group">
                    <Link class="list-group-item list-group-item-action" to={oneCountry.alpha3Code}>
                        <img src={`http://www.geognos.com/api/en/countries/flag/${oneCountry.alpha2Code}.png`} />
                        <p>{oneCountry.name.common}</p>
                    </Link>
                    </div>
                </div>
                )
            })}
        
        </div>
     </div>
     );
}

export default CountriesList;
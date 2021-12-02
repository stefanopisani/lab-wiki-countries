import { useState } from "react";
import { Link } from 'react-router-dom';

function CountriesList({ countriesJSON }) {
    const [countries, setCountries] = useState([])

    useState(() => {
        setCountries(countriesJSON)
    }, [])

    return (

        <div class="list-group">
            <h2>Countries-list</h2>
            {countries.map((country) => {
                return (
                    <Link className="list-group-item list-group-item-action" to={'/countries-list'} >
                            <img src={`http://www.geognos.com/api/en/countries/flag/${country.alpha2Code}.png`} alt="flags" />
                            <p>{country.name.common}</p>
                        
                    </Link>
                )
            })}
        </div>

    );
}

export default CountriesList;

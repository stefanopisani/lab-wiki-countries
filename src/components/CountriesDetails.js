import { useState, useEffect } from 'react'
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import countriesJson from '../countries.json';


function CountriesDetails() {
    const [foundCountry, setFoundCountry] = useState(null);

    const { countryId } = useParams();
    console.log(countryId);

    useEffect(() => {

        const theCountry = countriesJson.find((oneCountry) => {
          if (oneCountry.alpha3Code === countryId) {
            return true;
          }
        });
    
        setFoundCountry(theCountry);
    
      }, [])

      console.log(foundCountry);
    return ( 
        <div>
            
        </div>
     );
}

export default CountriesDetails;
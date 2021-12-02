import './App.css';
import Navbar from './components/Navbar';

import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails'
import countriesJSON from './countries.json'

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div class="container">
        <div class="row">

          <CountriesList countriesJSON={countriesJSON} />

          <Routes>
            <Route path='/country-details/:alpha3Code' element={<CountryDetails countriesJSON={countriesJSON} />} />
          </Routes>

        </div>
      </div>
    </div >
  );
}

export default App;

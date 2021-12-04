// src/App.js
import './App.css';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import Navbar from './components/Navbar';
import countriesJSON from './countries.json';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <Navbar />
      </div>

      <div className="content">
        <CountriesList countriesData={countriesJSON} />
        <Routes>
          <Route
            path="/:alpha3Code"
            element={<CountryDetails countriesData={countriesJSON} />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;

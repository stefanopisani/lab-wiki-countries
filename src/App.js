import './App.css';
import CountriesList from './components/CountriesList';
import Navbar from './components/Navbar';
import countriesData from './countries.json';
import CountryDetails from './components/CountryDetails';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div class="container">
        <div class="row">
          <Navbar />
          <CountriesList countriesData={countriesData} />
          <Routes>
            <Route
              path="/:alpha3Code"
              element={<CountryDetails countriesData={countriesData} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;

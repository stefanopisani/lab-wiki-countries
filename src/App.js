import './App.css';
import NavbarElement from './components/Navbar';
import countriesData from './countries.json';
import CountriesList from './components/CountriesList';
import { Route, Routes } from 'react-router';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <div className="App">
      <NavbarElement />
      <div className="container">
        <div className="row">
          <CountriesList countries={countriesData} />
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

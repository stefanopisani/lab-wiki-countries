import "./App.css";
import CountriesList from "./components/CountriesList";
import CountryDetails from "./components/CountryDetails";
import Navbar from "./components/Navbar";
//import countriesData from "./countries.json";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="container">
        <div className="row">
          {/* <CountriesList /> */}
          <Routes>
            <Route path="/" element={<CountriesList />} />
            <Route path="/:countryId" element={<CountryDetails />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;

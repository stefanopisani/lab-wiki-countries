// src/App.js
import "./App.css";
import { Routes, Route } from 'react-router-dom';

import Navbar from "./components/Navbar";
import CountriesList from "./components/CountriesList";
import CountriesDetails from "./components/CountriesDetails";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div class="container">
        <div class="row">
        <div class="col-3" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
            <CountriesList />
          </div>
          <div class="col">
            <Routes>
              <Route path="/:countryId" element={<CountriesDetails />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  )
}
export default App;


import { Link } from "react-router-dom";

function Navbar() {
  document.title = "LAB | React WikiCountries";

  return (
    <nav className="navbar navbar-dark bg-primary mb-3">
      <div className="container">
        LAB | React WikiCountries
        <ul>
          <Link to="/" className="nav-link">
            Countries List
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

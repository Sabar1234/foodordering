import { useState } from "react";
import "./Navbar.css";
function Navbar(props) {
  const [genre, setGenre] = useState("");

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg bg-${
          props.mode === "light" ? "dark" : "light"
        }`}
      >
        <div className="container-fluid">
          <a className="navbar-brand text-warning" href="/">
            Foodie
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
              <li className="nav-item mx-1">
                <a
                  className={`nav-link active  text-${
                    props.mode === "light" ? "light" : "dark"
                  }`}
                  aria-current="page"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="nav-item mx-3">
                <a
                  className={`nav-link active  text-${
                    props.mode === "light" ? "light" : "dark"
                  }`}
                  aria-current="page"
                  href="#menu-list"
                >
                  Menu
                </a>
              </li>
              <li className="nav-item mx-3">
                <a
                  className={`nav-link active  text-${
                    props.mode === "light" ? "light" : "dark"
                  }`}
                  aria-current="page"
                  href="/"
                >
                  About Us
                </a>
              </li>
              <li className="nav-item mx-3">
                <a
                  className={`nav-link active  text-${
                    props.mode === "light" ? "light" : "dark"
                  }`}
                  aria-current="page"
                  href="/"
                >
                  Contact
                </a>
              </li>
            </ul>
            <div className="d-flex" role="search">
              <input
                className="form-control mx-3 w-50"
                type="search"
                placeholder="Search"
                value={genre}
                aria-label="Search"
                onChange={(e) => setGenre(e.target.value)}
              />
              <button
                className="btn btn-outline-warning"
                onClick={() => {
                  props.searchItems(genre);
                  setGenre("");
                }}
              >
                Search
              </button>
            </div>

            <div className="form-check form-switch">
              <input
                className="form-check-input changeMode"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.toggleMode}
              />
              <label
                className={`form-check-label labelMode text-${
                  props.mode === "light" ? "light" : "dark"
                }`}
                htmlFor="flexSwitchCheckDefault"
              >
                {props.mode === "dark" ? "Mode" : "Mode"}
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

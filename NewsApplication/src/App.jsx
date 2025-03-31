import React, { useState } from "react";
import "./App.css";
import News from "./news";

function App() {
  const [searchQuery, setSearchQuery] = useState("india"); // Default search term

  const handleSearch = (e) => {
    e.preventDefault(); // Prevent page reload
    setSearchQuery(e.target.search.value); // Update query for News component
  };

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="#">
            NewsApp
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
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active text-white" href="#">
                  Home
                </a>
              </li>
            </ul>
            {/* Search Form */}
            <form className="d-flex" onSubmit={handleSearch}>
              <input
                className="form-control me-2"
                type="search"
                name="search"
                placeholder="Search news..."
                aria-label="Search"
              />
              <button className="btn btn-warning" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

      <h1 className="alert alert-info text-center">Welcome to NewsApp</h1>

      <News searchQuery={searchQuery} />
    </>
  );
}

export default App;

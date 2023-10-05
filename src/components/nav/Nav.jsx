import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
    const [query, setQuery] = useState();
    const navigate = useNavigate();

    const handleFormChange = (event) => {
        const value = event.target.value;
        setQuery(value);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        navigate("/searchresult?query=" + query)
    } 

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary mb-3">
            <div className="container">
                <Link className="navbar-brand" to="/">The Movie DB</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="movie-db-nav" aria-controls="movie-db-nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="movie-db-nav">
                  <div className="navbar-nav me-auto">
                    <Link className="nav-link active"to="/">Home</Link>
                    <Link className="nav-link" to="/tv">TV</Link>
                    <Link className="nav-link" to="/">Pricing</Link>
                    <Link className="nav-link" to="/">Disabled</Link>
                  </div>
                </div>
                <form class="d-flex" role="search" onChange={handleFormChange} onSubmit={handleFormSubmit} required>
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </nav>
    );  
};

export default Nav;
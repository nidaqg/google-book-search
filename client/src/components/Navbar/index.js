import React from 'react';
import {Link} from 'react-router-dom';
import logo from "../../images/n.png"


function Navbar() {
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/"><img src={logo} alt="logo" className="rounded-circle w-25"/></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavLinks" aria-controls="navbarNavLinks" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse justify-content-end" id="navbarNavLinks">
                    <div className="navbar-nav">
                        <Link className="nav-link" to="/search">Search</Link>
                        <Link className="nav-link" to="/saved">Saved List</Link>
                    </div>
              </div>
            </div>
        </nav>

    )
}

export default Navbar;

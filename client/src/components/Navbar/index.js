import React from 'react';
import {Link} from 'react-router-dom';
import logo from "../../images/n.png"


function Navbar() {
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/"><img src={logo} alt="logo" className="rounded-circle w-25"/></Link>
               
                    <div className="navbar-nav">
                        <Link className="nav-link" aria-current="page" to="/search">Search</Link>
                        <Link className="nav-link" to="/saved">Saved List</Link>
                    </div>
            </div>
        </nav>

    )
}

export default Navbar;

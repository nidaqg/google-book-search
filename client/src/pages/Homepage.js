import React from 'react';
import ResultCard from '../components/ResultCard';
import SearchBar from '../components/SearchBar';
import './style.css';

function Homepage() {
    return (
        <div className="container-fluid">
        <div className="row justify-content-center text-center mt-4">
        <div className="col-md-8">
   
        <SearchBar/>
        <ResultCard/>

        </div>
        </div>
        </div>
    )
}

export default Homepage

import React from 'react'

function SearchBar(props) {
    return (
        <>
            <label className="form-label fw-bold">Search for Book by Name</label>
            <input 
            className="form-control" 
            name="search"
            value= {props.search} 
            onChange={props.handleChange} 
            id="bookOptions" 
            placeholder="Type to search..."/>

            <button type="submit" 
            onClick={props.handleSearch} 
            className="btn localBtn btn-dark btn-lg mb-3 mt-3">Search</button>
       
        </>
    )
}

export default SearchBar;

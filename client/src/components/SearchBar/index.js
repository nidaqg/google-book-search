import React from 'react'

function SearchBar(props) {
    return (
        <>
            <label for="bookOptions" className="form-label fw-bold">Search for Book by Name</label>
            <input className="form-control" onChange={props.onChange} id="bookOptions" placeholder="Type to search..."/>
            <button type="submit" onClick={props.onClick} class="btn localBtn btn-dark btn-lg mb-3 mt-3">Search</button>
       
        </>
    )
}

export default SearchBar;

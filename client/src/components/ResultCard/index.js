import React from 'react'
import './style.css';

function ResultCard(props) {
    return (
        <div className="card mb-4 text-center justify-content-center localCard" key={props.id}>

      <img className="mt-4 card-img-top mx-auto d-block" src={props.image} alt={props.title} style={{width:'200px'}}/>

      <div className="card-body">
        <h4 className="card-title"><u>{props.title}</u></h4>
        <h5 className="card-title">{props.authors}</h5>
        <p className="card-text">{props.description}</p>

        <div className="d-grid gap-2 d-md-block">
           <button className="btn btn-dark localBtn m-2" target="_blank" rel="noopener noreferrer" type="button" onClick={props.viewBtn}>View</button>
           <button className="btn btn-dark localBtn m-2" type="button" onClick={props.saveBtn}>Save</button>
       </div>

      </div>
    </div>
    )
}

export default ResultCard;

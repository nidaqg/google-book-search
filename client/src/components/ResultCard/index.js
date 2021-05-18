import React from 'react'

function ResultCard(props) {
    return (
        <div className="card mb-3">
  <div className="row g-0">
    <div className="col-md-4">
      <img src={props.imgUrl} alt={props.title}/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <h5 className="card-title">{props.author}</h5>
        <p className="card-text">{props.description}</p>
      </div>
    </div>
  </div>
</div>
    )
}

export default ResultCard;

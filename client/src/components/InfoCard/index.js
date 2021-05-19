import React from 'react'

function InfoCard(props) {
    return (
           <div className="card">
  <div className="card-body">
    <h5 className="card-title fw-bold">{props.error}</h5>
  </div>
</div> 
    )
}

export default InfoCard;

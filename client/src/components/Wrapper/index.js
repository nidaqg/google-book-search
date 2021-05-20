import React from 'react'

function Wrapper(props) {
    return (
        <div className="container-fluid">
        <div className="row justify-content-center text-center mt-4">
        <div className="col-md-8">
            {props.children}
        </div>
        </div>
        </div>
    )
}

export default Wrapper;

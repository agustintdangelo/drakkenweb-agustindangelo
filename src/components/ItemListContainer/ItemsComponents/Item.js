import React from 'react';
import './ItemList.scss';


export default function Item(props) {
    return (
        <div className="card col-6 col-md-4 mb-5 border border-black" >
            <img className="card-img-top rounded"   src={props.pictureUrl} alt=""></img>
            <h5 className="card-title">{props.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{props.category}</h6>
            <div className="card-body">
                <p className="card-text">{props.description}</p>
            </div>
            <h3 className="card-text">{props.price}</h3>
        </div>
    )
}

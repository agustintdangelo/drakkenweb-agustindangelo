import React from 'react';
import './ItemList.scss';
import ItemCount from '../../ItemCount/ItemCount';
import { Link } from 'react-router-dom';


export default function Item(props) {
    return (
        <div className="card col-6 col-md-4 mb-5 border border-black text-center" >
            <Link to={`/item/${props.id}`}>
            <img className="card-img-top rounded"   src={props.pictureUrl} alt=""></img>
            <h5 className="card-title">{props.title}</h5>
            </Link>
            <h6 className="card-subtitle mb-2 text-muted">{props.category}</h6>
            <h3 className="card-text">{props.price}</h3>
            <ItemCount stockItem={props.stockItem}/>
        </div>
    )
}

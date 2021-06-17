import React from 'react';
import './ItemListContainer.scss';

const ItemListContainer=(props)=> {
    return (
        <h1 className="mensaje">
            {props.greeting}
        </h1>
    )
}

export default ItemListContainer;
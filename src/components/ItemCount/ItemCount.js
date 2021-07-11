import React, { useState } from 'react';
import './ItemCount.scss';

export default function ItemCount({stockItem, onAdd}) {
    
    const stock = stockItem;
    //const [numero, setNumero] = useState(0);
    const [toAdd, setToAdd] = useState(stock ? 1 : 0);
   /* const handleIncrement = () => {
        setNumero(numero + 1);
    };

    const handleDecrement = () => {
        setNumero(numero - 1);
    };
    */
    return (
        <div className="container-button ">
            <div className="row justify-content-center" >
                <button type="button" className="btn btn-danger col-1"  onClick={() => setToAdd(toAdd>1 ? toAdd - 1 : toAdd)}>-</button>
                <h4 className="cant-prod col-2">{toAdd}</h4>
                <button type="button" className="btn btn-success col-1" onClick={() => setToAdd(toAdd === stock ? toAdd : toAdd + 1)}> + </button>
                <div className="justify-content-center">
            </div>
            </div>
            <div className="justify-content-center p-2 ">
                <button type="button" className="btn border" onClick={() => onAdd(toAdd)}>Agregar al carrito</button>
            </div>
        </div>
    )
}

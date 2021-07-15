import React, { useState } from 'react';
import './ItemCount.scss';
import { Link } from 'react-router-dom';

export default function ItemCount({ stockItem, onAdd }) {

    const stock = stockItem;
    const [toAdd, setToAdd] = useState(stock ? 1 : 0);
    const [finalizarCompra, setFinalizarCompra] = useState(false);

    
    function compraFinalizada(cant) {
        onAdd(cant);
        setFinalizarCompra(true);
    }
    return (
        <div className="container-button ">
            <div className="row justify-content-center" >
                <button type="button" className="btn btn-danger col-1" onClick={() => setToAdd(toAdd > 1 ? toAdd - 1 : toAdd)}>-</button>
                <h4 className="cant-prod col-2">{toAdd}</h4>
                <button type="button" className="btn btn-success col-1" onClick={() => setToAdd(toAdd === stock ? toAdd : toAdd + 1)}> + </button>
                <div className="justify-content-center">
                </div>
            </div>
            <div className="justify-content-center p-2 ">
                {!finalizarCompra ? <button type="button" className="btn border" disabled={toAdd === 0} onClick={() => compraFinalizada(toAdd)}>Agregar al carrito</button> : <Link to="/cart"><button type="button" className="btn border" >Finalizar compra</button></Link>}
            </div>
        </div>
    )
}

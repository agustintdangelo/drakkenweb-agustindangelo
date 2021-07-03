import React, { useState } from 'react';
import './ItemCount.scss';

export default function ItemCount(props) {
    const stock = props.stockItem;
    const [numero, setNumero] = useState(0);
    const handleIncrement = () => {
        setNumero(numero + 1);
    };

    const handleDecrement = () => {
        setNumero(numero - 1);
    };
    return (
        <div className="container-button ">
            <div className="row justify-content-center" >
                <button type="button" className="btn btn-danger col-1" onClick={handleDecrement} disabled={numero > 0 ? false : true}>-</button>
                <h4 className="cant-prod col-2">{numero}</h4>
                <button type="button" className="btn btn-success col-1" onClick={handleIncrement} disabled={stock > numero ? false : true}> + </button>
                <div className="justify-content-center">
            </div>
            </div>
            <div className="justify-content-center p-2 ">
                <button type="button" className="btn border">Agregar al carrito</button>
            </div>
        </div>
    )
}

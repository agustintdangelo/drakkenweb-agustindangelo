import React, { useState } from "react";
import "./ItemCount.scss";
import { Link } from "react-router-dom";

export default function ItemCount({ stockItem, onAdd }) {
  const stock = stockItem;
  const [toAdd, setToAdd] = useState(stock ? 1 : 0);
  console.log("stock", toAdd);
  const [finalizarCompra, setFinalizarCompra] = useState(false);
  function compraFinalizada(cant) {
    onAdd(cant);
    setFinalizarCompra(true);
  }
  return (
    <div className="container-button ">
      <button
        type="button"
        disabled={finalizarCompra}
        className="btn col-4"
        onClick={() => setToAdd(toAdd > 1 ? toAdd - 1 : toAdd)}
      >
        -
      </button>
      <input className="col-4" value={toAdd} />
      <button
        type="button"
        disabled={finalizarCompra}
        className="btn col-4"
        onClick={() => setToAdd(toAdd === stock ? toAdd : toAdd + 1)}
      >
        {" "}
        +{" "}
      </button>

      <div className="">
        {!finalizarCompra ? (
          <button
            type="button"
            className="btn border col-12"
            disabled={toAdd === 0}
            onClick={() => compraFinalizada(toAdd)}
          >
            <i style={{ marginRight: "5px" }} className="bi bi-bag-check"></i>
            Agregar al carrito
          </button>
        ) : (
          <Link to="/cart">
            <button
              type="button"
              style={{ backgroundColor: "#8548B3", color: "white" }}
              className="btn border col-12"
            >
              <i style={{ marginRight: "5px" }} className="bi bi-bag-check"></i>
              Finalizar compra
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}

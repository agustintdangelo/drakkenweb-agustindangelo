import React from "react";
import ItemCount from "../../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useCartContext } from "../../../Context/CartContext";

export default function Item(props) {
  const { addToCart, realStock } = useCartContext();
  const stock = realStock(props);
  const onAdd = (qty) => addToCart(props, qty);
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 mb-4 mb-lg-4">
      <div className=" item card border border-black text-center h-100">
        <Link
          style={{ textDecoration: "none", color: "#8548B3" }}
          to={`/item/${props.id}`}
        >
          <img
            className="card-img-top rounded "
            src={props.pictureUrl}
            alt=""
          ></img>
          <h5 className="card-title">{props.title}</h5>
        </Link>
        <h6 className="card-subtitle mb-2 text-muted">{props.category}</h6>
        <h3 className="card-text">${props.price}</h3>
        {stock > 0 ? (
          <div>
            <h6 className="card-subtitle mb-2 text-muted">{stock}</h6>{" "}
            <ItemCount onAdd={onAdd} stockItem={props.stockItem} />{" "}
          </div>
        ) : (
          <h6 style={{ marginTop: "40px" }} className="card-subtitle mb-2">
            Sin Stock
          </h6>
        )}
      </div>
    </div>
  );
}

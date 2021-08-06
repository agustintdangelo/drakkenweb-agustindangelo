import React from "react";
import "./ItemList.scss";
import Item from "./Item";
import Bounce from "react-reveal/Bounce";

function ItemList(props) {
  const { data } = props;
  return (
    <div className="container">
      <Bounce>
        <div className="row md-3">
          {data.map((item, id) => (
            <Item key={id} {...item} />
          ))}
        </div>
      </Bounce>
    </div>
  );
}

export default ItemList;

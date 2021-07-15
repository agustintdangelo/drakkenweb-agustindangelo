import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "./ItemDetail.js";
import {itemsCollection} from "../../firebase";

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState([]);

  useEffect(() => {
    (async () => {
        const response = await itemsCollection.doc(id).get();
        setItem({ id : response.id, ...response.data() });
    })();
  }, [id]);

  return (
    <div className="row">
      <ItemDetail {...item}></ItemDetail>
    </div>
  );
};

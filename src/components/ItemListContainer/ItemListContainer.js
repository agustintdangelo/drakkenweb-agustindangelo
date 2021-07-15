import React, { useState, useEffect } from "react";
import "./ItemListContainer.scss";

import { useParams } from "react-router-dom";
import {itemsCollection } from '../../firebase';
import ItemList from './ItemsComponents/ItemList';

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {

    (async () => {
        let collection = itemsCollection;
        if(categoryName) collection = itemsCollection.where("category", "==", categoryName);
        const response = await collection.get()
        setItems(response.docs.map(item => ({ id : item.id, ...item.data()})));
    })();
    /*if (!categoryName) {
      setItems(database);
    } else {
      setItems(database.filter((item) => item.category === categoryName));
    }*/
  }, [categoryName]);

  return <ItemList data={items} />;
};

export default ItemListContainer;

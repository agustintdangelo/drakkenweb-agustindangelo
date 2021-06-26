import React, { useState, useEffect } from 'react';
import './ItemListContainer.scss';
import ItemList from './ItemsComponents/ItemList';
import { pcItems } from '../../pc-items.js';



const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setItems(pcItems);
            console.log(items);
        }, 2000);
    });
    return (
        <ItemList data={items} />
    )
}

export default ItemListContainer;
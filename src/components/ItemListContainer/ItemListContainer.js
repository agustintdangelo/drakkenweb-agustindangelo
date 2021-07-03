import React, { useState, useEffect } from 'react';
import './ItemListContainer.scss';
import ItemList from './ItemsComponents/ItemList';

import { useParams } from 'react-router-dom';



const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {categoryName}=useParams();
    
    
    useEffect(() => {
       
        fetch("https://mocki.io/v1/9f8e1546-6c7d-4cb9-a4b9-7371f978a6b0")
        .then(res=> res.json())
        .then((responseItems)=>{
            !categoryName?setItems(responseItems):setItems(responseItems.filter(item=>item.category===categoryName))});      
    },[categoryName])

    return (
        <ItemList data={items} />
    )
}

export default ItemListContainer;
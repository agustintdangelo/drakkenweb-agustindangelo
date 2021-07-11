import React, { useState, useEffect } from 'react';
import './ItemListContainer.scss';
import ItemList from './ItemsComponents/ItemList';
import {useCartContext} from '../Context/CartContext';
import { useParams } from 'react-router-dom';



const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {categoryName}=useParams();
    const { database } = useCartContext();
    
    useEffect(() => {
        if(!categoryName){
            setItems(database);
        }else{
            setItems(database.filter(item=>item.category===categoryName));
        }
                  
    },[categoryName, database])

    return (
        <ItemList data={items} />
    )
}

export default ItemListContainer;
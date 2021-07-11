
import React, {useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
import { ItemDetail } from './ItemDetail.js';
import {useCartContext} from '../Context/CartContext';



export const ItemDetailContainer = () => {
    const {id}=useParams();
    const { database } = useCartContext();
    const [item, setItem] = useState([]);
    
    useEffect(() => {
          const foundItem = database.find(item => item.id === +id);
          setItem(foundItem);
      }, [id, database]);
    
    return (
        <div className="row">
            <ItemDetail {...item}></ItemDetail>
        </div>
    )
}


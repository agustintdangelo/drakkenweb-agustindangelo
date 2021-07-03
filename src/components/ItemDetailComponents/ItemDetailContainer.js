import axios from 'axios';
import React, {useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
import { ItemDetail } from './ItemDetail.js';




export const ItemDetailContainer = () => {
    const {id}=useParams();
    const [item, setItem] = useState([]);
    
    useEffect(() => {
        (async () => {
          const { data } = await axios.get("https://mocki.io/v1/9f8e1546-6c7d-4cb9-a4b9-7371f978a6b0");
          const foundItem = data.find(item => item.id === +id);
          setItem(foundItem);
        })();
      }, [id]);
    
    return (
        <div className="row">
            <ItemDetail {...item}></ItemDetail>
        </div>
    )
}


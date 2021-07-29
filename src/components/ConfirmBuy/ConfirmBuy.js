import React from 'react';
import { useForm } from "react-hook-form";
import { dataBase, itemsCollection, ordersData } from '../../firebase';
import Form from 'react-bootstrap/Form';
import firebase from "firebase/app";
import 'firebase/firestore';
import { useCartContext } from '../Context/CartContext';
import { useState } from 'react';

export const ConfirmBuy = () => {
    
    const {register, handleSubmit,} = useForm(0)
    const {cart} = useCartContext();
    const [orderId, setOrderId] = useState();
    const [outOfStockState, setOutOfStockArr] = useState([]);
    const [ switcher, setSwitcher ] = useState([false]);

    const itemsToUpdate =itemsCollection.where(firebase.firestore.FieldPath.documentId(), 'in', cart.map(i => i.id));;


    const createOrder = (buyer) => {
        const newOrder = {
            buyer: buyer,
            items: cart,
            date: new Date(),
        }
        return newOrder;
    }
  
  
    const addNewOrder = (buyer) => {
        const newOrder = createOrder(buyer);
        const orders = ordersData;
        try {
            orders.add(newOrder).then((doc) => {
            setOrderId(doc.id);
            setSwitcher(false)
        })
        } catch(error) {
        console.log("Firebase add doc error:", error);
        }
    }

  const addOrderUpdateItems = (buyer) => {
    
    itemsToUpdate.get().then((querySnapshot) => {
      const batch = dataBase.batch();
      const outOfStock = [];
        querySnapshot.docs.forEach((docSnapshot, idx) => {
            if(docSnapshot.data().stockItem >= cart[idx].stockItem){
                batch.update(docSnapshot.ref, {'stockItem': docSnapshot.data().stockItem - cart[idx].quantity});
            } else {
                outOfStock.push({ ...docSnapshot.data(), id: docSnapshot.id });
            }
        })

        if(outOfStock.length === 0){
            batch.commit().then(() => {
                addNewOrder(buyer);         
            });
        } else {
            setOutOfStockArr(outOfStock);
        }
    })
  }


    

    return (
        <form className="d-flex justify-content-center flex-column" onSubmit= {handleSubmit(addOrderUpdateItems)} >
            <h1 > Nombre </h1>
            <input {...register("name", { required: true, pattern: /^([a-zA-Z]|\s)*$/i })}/>
            <h1> Apellido</h1>
            <input {...register("surname", { required: true, pattern: /^([a-zA-Z]|\s)*$/i })}/>
            <h1> Email </h1>
            <input {...register("email", { required: true , pattern: /[^@\s]+@[^@\s]+\.[^@\s]+/ })}/>
            <h1> Celular </h1>
            <input {...register("phone", { required: true })}/>
            {switcher?
            <input type="submit"/>
            :
            <>
                <h4>Gracias por su compra!</h4>
                <h6>El id de tu orden de compra es: {orderId} </h6>
            </>}
        </form>
    )
}

export default ConfirmBuy
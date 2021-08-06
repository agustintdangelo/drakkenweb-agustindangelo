import React from "react";
import { useForm } from "react-hook-form";
import { dataBase, itemsCollection, ordersData } from "../../firebase";
import firebase from "firebase/app";
import "firebase/firestore";
import { useCartContext } from "../../Context/CartContext";
import { useState } from "react";

export const ConfirmBuy = () => {
  const { register, handleSubmit } = useForm(0);
  const { cart } = useCartContext();
  const [orderId, setOrderId] = useState();
  const [outOfStockState, setOutOfStockArr] = useState([]);
  const [switcher, setSwitcher] = useState([false]);

  const itemsToUpdate = itemsCollection.where(
    firebase.firestore.FieldPath.documentId(),
    "in",
    cart.map((i) => i.id)
  );

  const createOrder = (buyer) => {
    const newOrder = {
      buyer: buyer,
      items: cart,
      date: new Date(),
    };
    return newOrder;
  };

  const addNewOrder = (buyer) => {
    const newOrder = createOrder(buyer);
    const orders = ordersData;
    try {
      orders.add(newOrder).then((doc) => {
        setOrderId(doc.id);
        setSwitcher(false);
      });
    } catch (error) {
      console.log("Firebase add doc error:", error);
    }
  };

  const addOrderUpdateItems = (buyer) => {
    itemsToUpdate.get().then((querySnapshot) => {
      const batch = dataBase.batch();
      const outOfStock = [];
      querySnapshot.docs.forEach((docSnapshot, idx) => {
        if (docSnapshot.data().stockItem >= cart[idx].stockItem) {
          batch.update(docSnapshot.ref, {
            stockItem: docSnapshot.data().stockItem - cart[idx].quantity,
          });
        } else {
          outOfStock.push({ ...docSnapshot.data(), id: docSnapshot.id });
        }
      });

      if (outOfStock.length === 0) {
        batch.commit().then(() => {
          addNewOrder(buyer);
        });
      } else {
        setOutOfStockArr(outOfStock);
      }
    });
  };

  return (
    <div className="col-lg-12">
      <form onSubmit={handleSubmit(addOrderUpdateItems)}>
        <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">
          Nombre
        </div>
        <div className="p-4">
          <div className="input-group mb-4 border rounded-pill p-2">
            <input
              {...register("name", {
                required: true,
                pattern: /^([a-zA-Z]|\s)*$/i,
              })}
              type="text"
              placeholder="Ingrese su nombre"
              aria-describedby="button-addon3"
              className="form-control border-0"
            ></input>
          </div>
        </div>
        <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">
          Apellido
        </div>
        <div className="p-4">
          <div className="input-group mb-4 border rounded-pill p-2">
            <input
              {...register("surname", {
                required: true,
                pattern: /^([a-zA-Z]|\s)*$/i,
              })}
              type="text"
              placeholder="Ingrese su apellido"
              aria-describedby="button-addon3"
              className="form-control border-0"
            ></input>
          </div>
        </div>
        <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">
          Email
        </div>
        <div className="p-4">
          <div className="input-group mb-4 border rounded-pill p-2">
            <input
              {...register("email", {
                required: true,
                pattern: /[^@\s]+@[^@\s]+\.[^@\s]+/,
              })}
              type="text"
              placeholder="Ingrese su email"
              aria-describedby="button-addon3"
              className="form-control border-0"
            ></input>
          </div>
        </div>
        <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">
          Número telefónico
        </div>
        <div className="p-4">
          <div className="input-group mb-4 border rounded-pill p-2">
            <input
              {...register("phone", { required: true })}
              type="text"
              placeholder="Ingrese su teléfono"
              aria-describedby="button-addon3"
              className="form-control border-0 "
            ></input>
          </div>
        </div>

        {switcher ? (
          <input type="submit" />
        ) : (
          <>
            <div className="bg-light px-4 py-3 font-weight-bold">
              <h4>Gracias por su compra!</h4>
              <h6>El id de tu orden de compra es: {orderId} </h6>
            </div>
          </>
        )}
      </form>
    </div>
  );
};

export default ConfirmBuy;

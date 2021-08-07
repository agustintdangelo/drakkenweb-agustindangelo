import React, { useState } from "react";
import { useCartContext } from "../../Context/CartContext";
import { Redirect } from "react-router-dom";
import ConfirmBuy from "../../components/ConfirmBuy/ConfirmBuy";

import "./Cart.scss";

const Cart = () => {
  const [formActivate, setFormActivate] = useState(false);
  const { cart, clearCart, deleteItem } = useCartContext();

  const productPrice = (price, quantity) => price * quantity;

  const activateForm = () => setFormActivate(true);

  if (!cart.length) return <Redirect to="/drakkenweb-agustindangelo/" />;
  return (
    <div className="d-flex justify-content-center flex-column">
      <div className="pb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col" className="border-0 bg-light">
                        <div className="p-2 px-3 text-uppercase">Producto</div>
                      </th>
                      <th scope="col" className="border-0 bg-light">
                        <div className="py-2 text-uppercase">Precio</div>
                      </th>
                      <th scope="col" className="border-0 bg-light">
                        <div className="py-2 text-uppercase">Cantidad</div>
                      </th>
                      <th scope="col" className="border-0 bg-light">
                        <div className="py-2 text-uppercase">Quitar</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((item) => (
                      <tr>
                        <th scope="row" className="border-0">
                          <div className="p-2">
                            <img
                              src={item.pictureUrl}
                              alt={item.title}
                              width="70"
                              className="img-fluid rounded shadow-sm"
                            ></img>
                            <div className="ml-3 d-inline-block align-middle">
                              <h5 className="mb-0">
                                {" "}
                                <a className="text-dark d-inline-block align-middle">
                                  {item.title}
                                </a>
                              </h5>
                              <span className="text-muted font-weight-normal font-italic d-block">
                                Categoría: {item.category}
                              </span>
                            </div>
                          </div>
                        </th>
                        <td className="border-0 align-middle">
                          <strong>
                            ${productPrice(item.price, item.quantity)}
                          </strong>
                        </td>
                        <td className="border-0 align-middle">
                          <strong>{item.quantity}</strong>
                        </td>
                        <td className="border-0 align-middle">
                          <button
                            className="btn"
                            onClick={() => deleteItem(item.id, item.quantity)}
                          >
                            <i>
                              <svg
                                width="24"
                                height="24"
                                xmlns="http://www.w3.org/2000/svg"
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                              >
                                <path d="M19 24h-14c-1.104 0-2-.896-2-2v-17h-1v-2h6v-1.5c0-.827.673-1.5 1.5-1.5h5c.825 0 1.5.671 1.5 1.5v1.5h6v2h-1v17c0 1.104-.896 2-2 2zm0-19h-14v16.5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-16.5zm-9 4c0-.552-.448-1-1-1s-1 .448-1 1v9c0 .552.448 1 1 1s1-.448 1-1v-9zm6 0c0-.552-.448-1-1-1s-1 .448-1 1v9c0 .552.448 1 1 1s1-.448 1-1v-9zm-2-7h-4v1h4v-1z" />
                              </svg>
                            </i>
                          </button>
                        </td>{" "}
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div class="text-right mr-5">
                  <button className="btn btn-secondary" onClick={clearCart}>
                    VACIAR CARRITO
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="row py-5 p-4 bg-white rounded shadow-sm">
            {formActivate === false ? (
              <div class="col-lg-12">
                <div class="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">
                  Resumen de compra{" "}
                </div>
                <div class="p-4">
                  {" "}
                  <ul class="list-unstyled mb-4">
                    <li class="d-flex justify-content-between py-3 border-bottom">
                      <strong class="text-muted">Subtotal </strong>
                      <strong>
                        $
                        {cart
                          .reduce(
                            (acc, { quantity, price }) =>
                              acc + quantity * price,
                            0
                          )
                          .toFixed(2)}
                      </strong>
                    </li>
                    <li class="d-flex justify-content-between py-3 border-bottom">
                      <strong class="text-muted">Costo de envío</strong>
                      <strong>$0.00</strong>
                    </li>
                    <li class="d-flex justify-content-between py-3 border-bottom">
                      <strong class="text-muted">Total</strong>
                      <h5 class="font-weight-bold">
                        $
                        {cart
                          .reduce(
                            (acc, { quantity, price }) =>
                              acc + quantity * price,
                            0
                          )
                          .toFixed(2)}
                      </h5>
                    </li>
                  </ul>
                  <a
                    onClick={activateForm}
                    class="btn btn-dark rounded-pill py-2 btn-block"
                  >
                    Realizar compra
                  </a>
                </div>
              </div>
            ) : (
              <ConfirmBuy />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

import React from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "./context";
import s from "./modal.module.css";
const Modal_for_details = props => {
  return (
    <ProductConsumer>
      {value => {
        const { Modal_for_detais, closeModal } = value;

        if (!Modal_for_detais) {
          return null;
        } else {
          return (
            <div className={s.global}>
              <div className={s.items}>
                <h4>Item Added To Cart</h4>
                <img src={props.img} />
                <h5 className={s.price}>
                  {props.name}
                  <br />
                  Size:{props.size_state}
                  <br />
                  Price:${props.price}
                </h5>

                <div className={s.coneiners}>
                  <button onClick={() => closeModal()} className={s.shop}>
                    Continue shopping
                  </button>
                  <br />
                  <Link to="/Cart">
                    <button onClick={() => closeModal()} className={s.cart}>
                      Go To Cart
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          );
        }
      }}
    </ProductConsumer>
  );
};

export default Modal_for_details;

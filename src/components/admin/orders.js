import React from "react";
import s from "./gallery.module.css";
import Order from "./order";
import { ProductConsumer } from "../shop/context";
import Tittle from "../shop/tittle";
const Orders = () => {
  return (
    <div className={s.all}>
      <div className={s.tittle}>
        <Tittle first="Our" second="Orders" />{" "}
      </div>

      <div className={s.left}></div>
      <div className={s.global}>
        <ProductConsumer>
          {product => {
            return product.orders.map(product => {
              return (
                <div className={s.item}>
                  <Order key={product.id} product={product} />
                </div>
              );
            });
          }}
        </ProductConsumer>
      </div>
      <div className={s.right}></div>
    </div>
  );
};
export default Orders;

import React from "react";
import s from "./cart.module.css";
import Form from "./form";

const size_array = [
  {
    size: "20x30",
    price: 0
  },
  {
    size: "30x30",
    price: 10
  },
  {
    size: "30x40",
    price: 20
  },
  {
    size: "40x60",
    price: 30
  },
  {
    size: "50x70",
    price: 40
  },
  {
    size: "60x90",
    price: 50
  },
  {
    size: "80x110",
    price: 60
  },
  {
    size: "100x100",
    price: 70
  },
  {
    size: "100x130",
    price: 80
  },
  {
    size: "160x130",
    price: 100
  }
];

export default function Column(props) {
  const { cart } = props.value;
  const {
    dropdown_buttun,
    orderOpen,
    openOrder,
    cartSubTotal,
    change_cart_size,
    increment,
    decrement,
    removeItem
  } = props.value;

  if (!orderOpen) {
    return (
      <div className={s.global}>
        <div className={s.all_first}>
          <div className={s.img_first}>PRODUCT</div>
          <div className={s.name_first}>NAME </div>
          <div className={s.size_first}>SIZE</div>
          <div className={s.price_first}>COST</div>
          <div className={s.quanity_first}>QUANITY</div>
          <div className={s.remove_first}>REMOVE</div>
          <div className={s.total_first}>TOTAL</div>
        </div>
        {cart.map(item => (
          <div className={s.all}>
            <div className={s.img}>
              <img src={item.img} />
            </div>
            <div className={s.name}>{item.name}</div>
            <div className={s.size}>
              <div className={s.dropdown}>
                <button
                  className={s.dropbtn}
                  onClick={() => dropdown_buttun(item.id)}
                >
                  {item.size} &#11015;
                </button>
                <div
                  className={s.dropdown_content}
                  style={{ display: item.dropdown ? "block" : "none" }}
                >
                  {size_array.map(size => (
                    <li
                      onClick={e => {
                        change_cart_size(
                          item.id,
                          size.price,
                          size.size,
                          item.original_price
                        );
                      }}
                      className={s.param_size}
                      price={size.price}
                      size_state={size.size}
                    >
                      {size.size}
                    </li>
                  ))}
                </div>
              </div>
            </div>
            <div className={s.price}>${item.price}</div>
            <div className={s.quanity}>
              <span
                onClick={() => {
                  decrement(item.id);
                }}
              >
                -
              </span>
              <span>{item.count}</span>
              <span
                onClick={() => {
                  increment(item.id);
                }}
              >
                +
              </span>
            </div>
            <div
              className={s.remove}
              onClick={() => {
                removeItem(item.id);
              }}
            >
              <img src="https://cdn4.iconfinder.com/data/icons/email-2-2/32/Trash-Email-Bin-512.png" />
            </div>
            <div className={s.total}>${item.total}</div>
          </div>
        ))}
        <div className={s.all}>
          <div className={s.details}>
            <h3>Total:${cartSubTotal}</h3>
            <button
              className={s.order}
              onClick={() => {
                openOrder();
              }}
            >
              Order
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return <Form cart={cart} value={props.value} />;
  }
}

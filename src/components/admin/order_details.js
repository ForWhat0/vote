import React from "react";
import { ProductConsumer } from "../shop/context";
import s from "../shop/Product_details.module.css";
import { Link } from "react-router-dom";

class Order_details extends React.Component {
  state = {
    price: "",
    size: ""
  };

  change_price(value) {
    this.setState({
      price: value
    });
  }
  change_size(value) {
    this.setState({
      size: value
    });
  }

  render() {
    return (
      <ProductConsumer>
        {value => {
          const { id, img, tittle, email, size, price, name } = value.details;
          return (
            <div className={s.global}>
              <div className={s.img_container}>
                <img src={img} style={{ width: "auto", height: "auto" }} />
              </div>

              <div className={s.info}>
                <h1>{name}</h1>
                <p>{email}</p>
                <p>{tittle}</p>
              </div>

              <div className={s.price}>
                <div>price:{price}</div>
                <input
                  className={s.detail_button}
                  type="text"
                  value={this.state.price}
                  onChange={e => this.change_price(e.target.value)}
                />
                <div>size:{size}</div>
                <input
                  className={s.detail_button}
                  type="text"
                  value={this.state.size}
                  onChange={e => this.change_size(e.target.value)}
                />
              </div>
              <div className={s.butt}>
                <Link to="/ADMIN_3004_PAINT/Orders">
                  <button className={s.detail_button}>BACK</button>
                </Link>
                <button
                  className={s.detail_button}
                  onClick={() =>
                    value.update_order(id, this.state.price, this.state.size)
                  }
                >
                  UPDATE
                </button>
                <Link to="/ADMIN_3004_PAINT/Orders">
                  <button
                    className={s.detail_button}
                    onClick={() => value.delete_order(id)}
                  >
                    DELETE
                  </button>
                </Link>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default Order_details;

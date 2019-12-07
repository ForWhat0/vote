import React from "react";
import { ProductConsumer } from "../shop/context";
import s from "../shop/Product_details.module.css";
import { Link } from "react-router-dom";

class Product_details extends React.Component {
  state = {
    price: "",
    name: "",
    tittle: ""
  };

  change_price(value) {
    this.setState({
      price: value
    });
  }
  change_name(value) {
    this.setState({
      name: value
    });
  }
  change_tittle(value) {
    this.setState({
      tittle: value
    });
  }
  componentDidMount() {
    this.imagestore();
  }

  render() {
    return (
      <ProductConsumer>
        {value => {
          const { id, img, tittle, price, name } = value.details;
          this.imagestore = () => {
            this.setState({
              name: name,
              price: price,
              tittle: tittle
            });
          };
          return (
            <div className={s.global}>
              <div className={s.img_container}>
                <img src={img} style={{ width: "auto", height: "auto" }} />
              </div>

              <div className={s.info}>
                <input
                  className={s.detail_button}
                  type="text"
                  value={this.state.name}
                  onChange={e => this.change_name(e.target.value)}
                />

                <input
                  className={s.detail_button}
                  type="text"
                  value={this.state.tittle}
                  onChange={e => this.change_tittle(e.target.value)}
                />
              </div>

              <div className={s.price}>
                <input
                  className={s.detail_button}
                  type="text"
                  value={this.state.price}
                  onChange={e => this.change_price(e.target.value)}
                />
              </div>
              <div className={s.butt}>
                <Link to="/ADMIN_3004_PAINT/Gallery">
                  <button className={s.detail_button}>BACK</button>
                </Link>
                <button
                  className={s.detail_button}
                  onClick={() =>
                    value.update_gallery(
                      id,
                      this.state.name,
                      this.state.price,
                      this.state.tittle
                    )
                  }
                >
                  UPDATE
                </button>
                <Link to="/ADMIN_3004_PAINT/Gallery">
                  <button
                    className={s.detail_button}
                    onClick={() => value.delete_gallery(id)}
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

export default Product_details;

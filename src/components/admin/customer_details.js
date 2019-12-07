import React from "react";
import { ProductConsumer } from "../shop/context";
import s from "../shop/Product_details.module.css";
import { Link } from "react-router-dom";

class Customer_details extends React.Component {
  state = {
    price: "",
    name: "",
    tittle: "",
    email: "",
    name_of_product: "",
    size: "",
    country: "",
    city: "",
    address: "",
    count: ""
  };

  change_count(value) {
    this.setState({
      count: value
    });
  }
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
  change_email(value) {
    this.setState({
      email: value
    });
  }
  change_name_of_product(value) {
    this.setState({
      name_of_product: value
    });
  }
  change_size(value) {
    this.setState({
      size: value
    });
  }
  change_country(value) {
    this.setState({
      country: value
    });
  }
  change_city(value) {
    this.setState({
      city: value
    });
  }
  change_address(value) {
    this.setState({
      address: value
    });
  }
  componentDidMount() {
    this.imagestore();
  }

  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            id,
            img,
            email,
            name,
            size,
            total,
            name_of_product,
            country,
            city,
            address,
            tittle,
            count
          } = value.details;
          this.imagestore = () => {
            this.setState({
              email: email,
              name: name,
              size: size,
              price: total,
              name_of_product: name_of_product,
              country: country,
              city: city,
              address: address,
              tittle: tittle,
              count: count
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
                  value={this.state.email}
                  onChange={e => this.change_email(e.target.value)}
                />
                <input
                  className={s.detail_button}
                  type="text"
                  value={this.state.country}
                  onChange={e => this.change_country(e.target.value)}
                />
                <input
                  className={s.detail_button}
                  type="text"
                  value={this.state.city}
                  onChange={e => this.change_city(e.target.value)}
                />
                <input
                  className={s.detail_button}
                  type="text"
                  value={this.state.address}
                  onChange={e => this.change_address(e.target.value)}
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
                  value={this.state.name_of_product}
                  onChange={e => this.change_name_of_product(e.target.value)}
                />
                <input
                  className={s.detail_button}
                  type="text"
                  value={this.state.price}
                  onChange={e => this.change_price(e.target.value)}
                />
                <input
                  className={s.detail_button}
                  type="text"
                  value={this.state.count}
                  onChange={e => this.change_count(e.target.value)}
                />
                <input
                  className={s.detail_button}
                  type="text"
                  value={this.state.size}
                  onChange={e => this.change_size(e.target.value)}
                />
              </div>
              <div className={s.butt}>
                <Link to="/ADMIN_3004_PAINT/Customers">
                  <button className={s.detail_button}>BACK</button>
                </Link>
                <button
                  className={s.detail_button}
                  onClick={() =>
                    value.update_customer(
                      id,
                      this.state.name,
                      this.state.price,
                      this.state.tittle,
                      this.state.email,
                      this.state.name_of_product,
                      this.state.size,
                      this.state.country,
                      this.state.city,
                      this.state.address,
                      this.state.count
                    )
                  }
                >
                  UPDATE
                </button>
                <Link to="/ADMIN_3004_PAINT/Customers">
                  <button
                    className={s.detail_button}
                    onClick={() => value.delete_customer(id)}
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

export default Customer_details;

import React from "react";
import Form from "./form";
import Upload from "./upload";
import s from "./admin.module.css";
import Admin_menu from "./admin_menu";
import { Route } from "react-router-dom";
import Orders from "./orders";
import Gallery from "./gallery";
import { ProductProvider } from "../shop/context";
import Order_details from "./order_details";
import Product_details from "./product_details";
import Customers from "./customers";
import Customer_details from "./customer_details";

class Admin extends React.Component {
  state = {
    login: "",
    password: "",
    admin: false
  };

  gettingAdmin = async event => {
    event.preventDefault();
    var login = event.target.login.value;
    var password = event.target.password.value;

    if (login === "1" && password === "2") {
      this.setState({
        admin: true
      });
    }
  };

  render() {
    const { admin } = this.state;
    return (
      <ProductProvider>
        <div className={s.global}>
          {admin ? (
            <React.Fragment>
              <div className={s.menu}>
                {" "}
                <Route path="/ADMIN_3004_PAINT" component={Admin_menu} />{" "}
              </div>
              <div className={s.content}>
                <Route
                  path="/ADMIN_3004_PAINT/Customer_details"
                  component={Customer_details}
                />
                <Route
                  path="/ADMIN_3004_PAINT/Customers"
                  component={Customers}
                />
                <Route
                  path="/ADMIN_3004_PAINT/Product_details"
                  component={Product_details}
                />
                <Route
                  path="/ADMIN_3004_PAINT/Order_details"
                  component={Order_details}
                />
                <Route path="/ADMIN_3004_PAINT/Add_new" component={Upload} />
                <Route path="/ADMIN_3004_PAINT/Orders" component={Orders} />
                <Route path="/ADMIN_3004_PAINT/Gallery" component={Gallery} />
              </div>
              ;
            </React.Fragment>
          ) : (
            <Form Admin_method={this.gettingAdmin} />
          )}
        </div>
      </ProductProvider>
    );
  }
}
export default Admin;

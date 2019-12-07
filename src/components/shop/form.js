import React from "react";
import { customer } from "../shop/context";
import Telegram from "telegram-send-message";
import s from "../order/admin.module.css";
import { useState } from "react";

export default function Form(props) {
  const { closeOrder, clearCart } = props.value;
  const [name, set_name] = useState("");
  const [email, set_email] = useState("");
  const [country, set_country] = useState("");
  const [city, set_city] = useState("");
  const [address, seet_address] = useState("");

  function change_name(value) {
    set_name(name => value);
  }
  function change_email(value) {
    set_email(email => value);
  }
  function change_country(value) {
    set_country(country => value);
  }
  function change_city(value) {
    set_city(city => value);
  }
  function change_address(value) {
    seet_address(address => value);
  }

  function handleUpload(event) {
    event.preventDefault();
    {
      props.cart.map(item => {
        customer
          .push()
          .set({
            img: item.img,
            name_of_product: item.name,
            count: item.count,
            size: item.size,
            total: item.total,
            name: name,
            email: email,
            country: country,
            city: city,
            address: address,
            tittle: 0
          });
        Telegram.setToken("769058548:AAEfZtSvFVUwaDNAvdHtLS4ygDcpsMfO-fs");
        Telegram.setRecipient("517033430");
        Telegram.setMessage(
          "Customer \n -Name: \r" +
            name +
            "\n -number: \n" +
            email +
            "\n -country: \n" +
            country +
            "\n -city: \n" +
            city +
            "\n -address: \n" +
            address +
            "-name_of_product: \n" +
            item.name +
            "\n" +
            "-size: \n" +
            item.size +
            "\n" +
            "-count:" +
            "\n" +
            item.count +
            "\n" +
            "-total: \n" +
            item.total +
            "\n"
        );
      });
    }
    Telegram.send();
    closeOrder();
    clearCart();
  }

  return (
    <div className={s.form}>
      <h4>Thanks for your order, we will get back to you</h4>
      <form onSubmit={handleUpload}>
        <input
          type="text"
          name="name"
          placeholder="name"
          required
          value={name}
          onChange={e => change_name(e.target.value)}
        />
        <input
          type="text"
          name="email"
          placeholder="email or number"
          required
          value={email}
          onChange={e => change_email(e.target.value)}
        />
        <input
          type="text"
          name="country"
          placeholder="country"
          required
          value={country}
          onChange={e => change_country(e.target.value)}
        />
        <input
          type="text"
          name="city"
          placeholder="city"
          required
          value={city}
          onChange={e => change_city(e.target.value)}
        />
        <input
          type="text"
          name="address"
          placeholder="address"
          required
          value={address}
          onChange={e => change_address(e.target.value)}
        />
        <button>DO Order</button>
      </form>
    </div>
  );
}

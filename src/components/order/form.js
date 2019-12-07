import React from "react";
import s from "./admin.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function Form(props) {
  const [login, set_log] = useState("");
  const [password, set_pass] = useState("");
  function change_log(value) {
    set_log(login => value);
  }
  function change_pass(value) {
    set_pass(password => value);
  }

  return (
    <div className={s.form}>
      <h1>Вхід</h1>
      {props.error == true ? (
        <div style={{ marginBottom: "5%" }}>{props.error_text}</div>
      ) : null}
      <input
        className={props.error_login ? s.error : null}
        value={login}
        onChange={e => change_log(e.target.value)}
        type="text"
        name="login"
        spellcheck="false"
        placeholder="login"
        required
        autocomplete="off"
      />
      <input
        className={props.error_password ? s.error : null}
        value={password}
        onChange={e => change_pass(e.target.value)}
        type="password"
        name="password"
        spellcheck="false"
        placeholder="password"
        required
        autocomplete="off"
      />
      <button
        onClick={() => {
          props.login(login, password);
        }}
      >
        Sign in
      </button>
      <Link to="/Register">
        <div style={{ marginTop: "20px" }}>Зареєструватися</div>
      </Link>
    </div>
  );
}

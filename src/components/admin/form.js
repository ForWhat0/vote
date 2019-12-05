import React from "react";
import s from './admin.module.css';
const Form =(props)=>(
    <form onSubmit={props.Admin_method} className={s.form}>
               <input type="text" name="login" spellcheck="false" placeholder='login'  required autocomplete="off" />
               <input type="password" name="password" spellcheck="false" placeholder='password'  required autocomplete="off" />
              <button >Sign in</button>
            </form>
)
export default Form;
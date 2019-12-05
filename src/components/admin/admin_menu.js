import React from "react";
import s from './admin_menu.module.css';
import {NavLink} from "react-router-dom";
const Admin_menu =(props)=>(
    <div className={s.base_menu}>
           <input type="checkbox" id={s.nav} className={s.hidden} /> 
         <label for={s.nav} className={s.nav_btn}>
                  
                        <i></i>
                        <i></i>
                        <i></i>
                  </label>  
          <nav className={s.nav}>
           <ul>
               <li>
               <NavLink  exact to="/ADMIN_3004_PAINT/Add_new" activeClassName={s.active}> Add New </NavLink>
               </li>
               <li>
               <NavLink  exact to="/ADMIN_3004_PAINT/Gallery" activeClassName={s.active}> Gallery </NavLink>
               </li>
               <li>
               <NavLink  exact to="/ADMIN_3004_PAINT/Orders" activeClassName={s.active}>  Orders </NavLink>
               </li>
               <li>
               <NavLink  exact to="/ADMIN_3004_PAINT/Customers" activeClassName={s.active}>  Customers </NavLink>
               </li>
           </ul>
        </nav>
           </div>
)
export default Admin_menu;
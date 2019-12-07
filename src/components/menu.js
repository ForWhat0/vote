import React from "react";
import s from "./menu.module.css";
import {NavLink} from "react-router-dom";
import {Link} from 'react-router-dom';
import logo from './logo.png';
import {ProductConsumer} from './shop/context';
import Cabinet from "./shop/cabinet";
const Menu = ()=>{
    return(
       <React.Fragment>
          <input type="checkbox" id={s.global} className={s.hidden} /> 
         <label for={s.global} className={s.nav_btn}>
                        <i></i>
                        <i></i>
                        <i></i>
                  </label> 
       <div className={s.global}>
          <div className={s.header}><Link style={{color:'white'}} to='/'>YourIndex</Link></div>
          <div className={s.profil}> 
          <ProductConsumer>
         {product=>{
                 return( 
                    product.islogined === 'false' ?
                 <React.Fragment>
                    
                 <div style={{backgroundImage: `url(${logo})`}} className={s.profil_avatar}></div>
                 <div  onClick={()=>product.openModal()} className={s.profil_text}>Увійти</div>
                 </React.Fragment>
                  :
                 <React.Fragment>
                   <div style={{display:'none'}}><Cabinet  item={product.user[0]} /></div> 
                 <div style={{backgroundImage: 'url(https://icons-for-free.com/iconfiles/png/512/business+costume+male+man+office+user+icon-1320196264882354682.png)'}} className={s.profil_avatar}></div>
                 <div className={s.profil_text}><Link to='/cabinet'>{product.user[0].login}</Link></div>
                 </React.Fragment>
                 )}}
        </ProductConsumer>
          </div>
           
           
            
          <nav className={s.nav}>
           <ul>
               <li>
               <NavLink  exact to="/" activeClassName={s.active}> Головна </NavLink>
               </li>
               <li>
               <NavLink  exact to="/Order" activeClassName={s.active}> Пройти опитування </NavLink>
               </li>
              
               <li>
               <NavLink  exact to="/Contact" activeClassName={s.active}> Про нас </NavLink>
               </li>
           </ul>
        </nav>
           
           
        
        
       </div>
       </React.Fragment>
    );
}
export default Menu;
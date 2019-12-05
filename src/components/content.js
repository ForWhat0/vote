import React from "react";
import Order from "./order/order";
import Shop from "./shop/shop";
import { Route } from 'react-router-dom';
import Contact from './contact/contact';
import Admin from "./admin/admin";
import Register from "./order/register";
import Cabinet from "./shop/cabinet";



const Content = ()=>{
    return(
        
       <article className="content">
           <Route path='/Cabinet'  component={Cabinet}/> 
       <Route path='/Register'  component={Register}/>     
      <Route path='/Order'  component={Order}/>
      <Route path='/'  component={Shop}/>
      <Route path='/Contact'  component={Contact}/> 
      <Route path='/ADMIN_3004_PAINT'  component={Admin}/> 
  </article>

    );
}
export default Content;
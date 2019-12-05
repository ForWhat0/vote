import React from 'react';
import Content from './content';
import s from './shop.module.css';
import {Route} from 'react-router-dom';
import ProductDetails from './Product_details';
import Cart from './cart';
import Modal from './modal';
import {ProductProvider} from './context';
const Shop =()=>{
    
    return(
        <ProductProvider>
        <div className={s.all}>
           <div className={s.content}><Route exact path='/' component={Content}/></div>
           <div className={s.content}><Route exact path='/ProductDetails' component={ProductDetails}/></div>
           <div className={s.content}><Route exact path='/Cart' component={Cart}/></div>
         <Modal/>
         </div>
         </ProductProvider>
    );
    }

export default Shop;
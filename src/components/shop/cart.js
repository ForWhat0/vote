import React from 'react';
import {Link} from 'react-router-dom';
import Column from './cart_column';
import Tittle  from './tittle';
import s from './cart.module.css';
import { ProductConsumer } from './context';
export default function Cart(){
       
           return(
             <div >
              <ProductConsumer>
                {value=>{
                  const {cart}=value;
                  if (cart.length>0){
                    return(
                      <React.Fragment>
                      <Tittle first="Your" second="Cart"/>
                      <div className={s.cart}>
                      <Column value={value}/>
                      </div>
                      </React.Fragment>
                    );
                  }
                  else{
                    return <Tittle first="Cart is emty" />
                  }
                }}
            
             </ProductConsumer>
             </div>
           );
       
}
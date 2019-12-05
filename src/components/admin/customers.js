import React from 'react';
import s from './gallery.module.css';
import Customer from './customer';
import {ProductConsumer} from '../shop/context';
import Tittle from '../shop/tittle';
const Customers=()=>{
    return(
       
       <div className={s.all}>
            <div className={s.tittle} ><Tittle first='Our' second='Customers'/> </div>   
            
            
            
       <div className={s.left}></div>
        <div className={s.global} >
          
             <ProductConsumer>
         {product=>{
             return product.customers.map(product=>{
                 return <div className={s.item}><Customer key={product.id} product={product}/></div>}
             ) 
         }}

     </ProductConsumer>
     
        
        
        </div>
        <div className={s.right}></div>
    
        </div>
    );
}
export default Customers;
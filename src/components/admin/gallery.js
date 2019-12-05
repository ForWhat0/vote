import React from 'react';
import s from './gallery.module.css';
import Product from './product';
import {ProductConsumer} from '../shop/context';
import Tittle from '../shop/tittle';
import ReactToExcel from 'react-html-table-to-excel';
const Gallery=()=>{
    return(
      <ProductConsumer>
      {product=>{
          product.table.map((item,i)=>{
            console.log(item.answers[i].answer)
          })
              return( 
               
                <div className={s.all}>
                <table id='table'>
       <caption>Таблиця відповідей <ReactToExcel className={s.btn} table='table' filename='file' sheet='sheet 1' buttonText='EXPORT'/></caption> 
       <thead>
         <tr>
           <th scope="col">Логін</th>
           <th scope="col">Дата</th>
           {product.options.map(item=>
      <th scope="col">{item.select}</th>
            )}
         </tr>
       </thead>
       <tbody>
       
{
  product.table.map(item=>
        <tr>
        <td scope="row" data-label="Логін">{item.user}</td>
        <td  data-label="Дата">{item.date}</td>
        {product.options.map((option,i)=>{
          return(
        <td  data-label={option.select}>{item.answers[i].answer}</td>
          )
        })}
        </tr>
  )
}
      
         
     
       
       </tbody>
     </table>
          
                
                      
         
             </div>
              )    
      }}
     
  </ProductConsumer>
      
    )
}
export default Gallery;
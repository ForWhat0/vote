import React from "react";
import s from "./info.module.css";
import Product from '../shop/Product';
import {ProductConsumer} from '../shop/context';
import Form from './form';

const Info =()=>{
    return(
      
        <ProductConsumer>
         {product=>{
              const {nextItem,number,nextItem_for_second_question,nextItem_for_first_question}=product; 
              const length = product.products.length;
                 return( 
                   <React.Fragment>
                     {product.islogined === 'false' ? <Form error={product.error} error_text={product.error_text} error_login={product.error_login} error_password={product.error_password} login={product.do_login}/>:

                     product.time_poll_good === true ? 
                     
                     
                     <Product nextItem_for_first={nextItem_for_first_question} nextItem_for_second={nextItem_for_second_question}  index={nextItem} length={length} number={number} item={product.single} />
                    :
                 <div className={s.thx}>Дякуємо вам , днів до наступного опитування:{product.left_days}</div>
                    }
                     
                  
                   </React.Fragment>
                
                 )    
         }}
        
     </ProductConsumer>
   
    );
}
export default Info;
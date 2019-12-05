import React from 'react';
import {Link} from 'react-router-dom'; 
import s from '../shop/product.module.css';
import loader from '../shop/loading.gif'
import { ProductConsumer } from '../shop/context';
export default class Order extends React.Component{
    constructor(props) {
        super(props);
        this.state = { imageStatus: <div className={s.loader}><img  src={loader}/></div> };
      }
    
      handleImageLoaded() {
        this.setState({ imageStatus: null });
      }
      handleImageErrored() {
        this.setState({ imageStatus: "failed to load" });
      }
    render(){
        const {id,name,img}=this.props.product;
        return(
        
           
       <ProductConsumer>
      {value=>(
       <div className={s.imgContainer}
       onClick={()=>
        value.showOrderDetails(id)
     
    }
       >
       <Link  to='/ADMIN_3004_PAINT/Order_details'> 
       
       <img  onLoad={this.handleImageLoaded.bind(this)}  onError={this.handleImageErrored.bind(this)} className={s.product_img} src={img}/>
        
        <span>{name}</span>
        {this.state.imageStatus}
        </Link>
        
        </div>
      )}
        </ProductConsumer>
       
           
        );
    }
}


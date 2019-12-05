import React from 'react';
import s from './product.module.css';
import PropTypes from 'prop-types';
import loader from '../shop/loading.gif';
import {Link} from 'react-router-dom'; 
import { ProductConsumer } from '../shop/context';
export default class Product extends React.Component{
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
        const {id,name,img,price,inCart}=this.props.product;
        return(
          <ProductConsumer>
          {value=>(
           <div className={s.imgContainer}
           onClick={()=>
            value.showDetails(id)
         
        }
           >
           <Link  to='/ADMIN_3004_PAINT/Product_details'> 
           
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
Product.propTypes={
    product:PropTypes.shape({
        id:PropTypes.number,
        img:PropTypes.string,
        title:PropTypes.string,
        price:PropTypes.number,
        inCart:PropTypes.bool
    }).isRequired
};

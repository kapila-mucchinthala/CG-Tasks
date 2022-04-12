import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector }  from 'react-redux';
import { selectedProduct,removeSelectedProduct } from '../redux/actions/productActions';
import Styles from './productComponent.module.css';

export const ProductDetail = () => {
    const product = useSelector(state => state.product);
    const { productId } = useParams();
    const dispatch = useDispatch();
    console.log(productId);
    console.log(product);

    const fetchProductDetail = async () => {
      const response=await axios.get(`https://fakestoreapi.com/products/${productId}`)
        .catch(function (error) {
          console.log("Error");
        })           
        dispatch(selectedProduct(response.data));
    }; 

    useEffect(() => {
        if (productId && product !== "") {
            fetchProductDetail();
            return () => {
                dispatch(removeSelectedProduct());
            }
        }    
    },[productId]);
    
    return (
           <div>
            {Object.keys(product).length === 0 ?
                (<div>...Loading</div>):( 
                <div className={Styles.product_container} style={{ margin:"auto",marginTop:'100px' }}>
                <img className={Styles.product_img} src={product.image} alt='img'/>
                <div>{product.title}</div>
                <div>${product.price}</div>
                <div>{product.category}</div>
                <div>{product.description}</div>
            </div>  
            )
            }
            </div>
        )
}

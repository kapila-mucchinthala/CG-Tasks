import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setProducts } from '../redux/actions/productActions';
import { ProductComponent } from './ProductComponent';
import axios from 'axios';
import Styles from './productListing.module.css';

export const ProductListing = () => {
  const products = useSelector((state) => state);
  // console.log(products);
  const dispatch = useDispatch();
 
    const fetchProducts = async () => {
      const response=await axios.get('https://fakestoreapi.com/products')
        .catch(function (error) {
          console.log("Error");
        })           
        dispatch(setProducts(response.data));
    }; 

    useEffect(() => {
        fetchProducts();
    },[]);

    return ( 
        <div className={Styles.products_page}>
           <ProductComponent/>
        </div>
    )
}

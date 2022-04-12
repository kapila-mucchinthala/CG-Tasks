import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Styles from './productComponent.module.css';


export const ProductComponent = () => {
    const products = useSelector(state => state.allProducts.products);
    // console.log(products);
    const renderList = products.map((product) => {
        const { id, title, price, category, image } = product;
        return (
            <div>
                <Link to={`/product/${id}`}>
                <div className={Styles.product_container}>
                    <img className={Styles.product_img} src={image} alt={title}/>
                    <div>{title}</div>
                    <div>${price}</div>
                    <div>{category}</div>
                </div>
                </Link>
            </div>
        )
    })
    return <>{renderList}</>
} 

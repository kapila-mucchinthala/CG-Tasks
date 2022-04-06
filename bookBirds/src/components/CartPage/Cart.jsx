import { Navbar } from '../HomePage/Navbar';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Styles from './cart.module.css';

export const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const displayCart = () => {
        axios.get('http://localhost:3500/cart')
            .then(function (response) {
                const list = response.data;
                console.log(list);
                setCartItems(list);
            })
            
            .catch(function (error) {
                console.log('error');
        })
    }
    useEffect(() => {
        displayCart();
    }, []);
    return (
        <div>
            <Navbar/> 
            <div className={Styles.cart_view}>
                <div className={Styles.books_view}>{
                        cartItems.map((prod,id) => {
                            return (
                                <div className={Styles.books_div} key={id}>
                                    <div>
                                    <img className={Styles.books_img} src={prod.product_img} alt="pic" />
                                    </div>
                                    <div>
                                    <div className={Styles.book_title}>{prod.product_title}</div>
                                    <div className={Styles.book_author}>{prod.product_author}</div>
                                    <div className={Styles.books_price}>Rs.{prod.product_price}</div>
                                    </div>
            
                                </div>
                            )
                        })
                    }
                </div> 
                <div className={Styles.payment_div}>
                    <h4>Payment</h4>
                </div>
            </div>
        </div>
    )
}

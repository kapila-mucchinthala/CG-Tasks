import Styles from './products.module.css';
import { Navbar } from '../HomePage/Navbar';
import { useState, useEffect } from 'react';
import axios from 'axios';
// import books from 'db.json';

export const Products = () => {
    const [dataOne, setDataOne] = useState([]);
    const [dataTwo, setDataTwo] = useState([]);
    // const [status, setStatus] = (true);
    const [quantity, setQuantity] = useState(1);

    const showData = () => {
        axios.get('http://localhost:3500/books')
            .then(function (response) {
                const books = response.data;
                // console.log(books);
                setDataOne(books);
                setDataTwo(books);
            //   console.log(dataOne);
            })
            
            .catch(function (error) {
        })
    }
    useEffect(() => {
        showData();
    }, []);
    const filterResult = (catItem) => {
        const result = dataTwo.filter((curData) => {
            return curData.availability === catItem;
        });
        setDataOne(result);
    }
    const filterPrice = (min, max) => {
        const result = dataTwo.filter((curData) => {
            return curData.price_now >= min && curData.price_now <= max;
        });
        setDataOne(result);
    }
    const sortingData = (el) => {
        if (el === 'pLH') {
            // console.log(dataTwo);
            const result = dataTwo.sort((a, b) => {
                return a.price_now - b.price_now;
            });
            console.log(result);
            setDataOne(result);
        }
        if (el === 'pHL') {
            console.log(el);
            const result = dataTwo.sort((a, b) => {
                return b.price_now - a.price_now;
            });
            console.log(result);
            setDataOne(result);
        }
    }
    const addToCart = (e) => {
        // console.log(e);
        const cartData = {
            product_id: e.id,
            product_qty: quantity,
            product_title: e.title,
            product_img: e.image,
            product_price: e.price_now,
            product_author:e.author
        }
        axios.post('http://localhost:3500/cart',cartData);
        alert("Item added to Cart");
        console.log(cartData);
    }

    return (
        <div>
            <Navbar />
            <hr/>
        <div className={Styles.products_container}>
            <div>
                <h5>Refine your Search</h5>
                <div className={Styles.filters}>
                    <div className={Styles.filter_heading}>By Price</div>
                    <div onClick={showData} className={Styles.filter_options}>All</div>
                    <div onClick={()=>filterPrice(0,100)} className={Styles.filter_options}>Below Rs.100</div>
                    <div onClick={()=>filterPrice(100,500)} className={Styles.filter_options}>Rs.100 - Rs.500</div>
                    <div onClick={()=>filterPrice(500,1000)} className={Styles.filter_options}>Rs.500 - Rs.1000</div>
                    <div onClick={()=>filterPrice(1000,2000)} className={Styles.filter_options}>Rs.1000 - Rs.2000</div>
                    <div onClick={()=>filterPrice(2000,5000)} className={Styles.filter_options}>Above Rs.2000</div>
                    </div>
                    <hr/>
                
                <div className={Styles.filters}>
                    <div className={Styles.filter_heading}>Availability</div>
                    <div onClick={showData} className={Styles.filter_options}>All</div>
                    <div onClick={()=>filterResult('Pre-order')} className={Styles.filter_options}>Pre-Order</div>
                    <div onClick={()=>filterResult('Available')} className={Styles.filter_options}>In Stock</div>
                    <div onClick={()=>filterResult('Out of Stock')} className={Styles.filter_options}>Out of Stock</div>
                    </div>
                    <hr />
                <div className={Styles.filters}>
                    <div className={Styles.filter_heading}>By Discount</div>
                    <div className={Styles.filter_options}>All</div>
                    <div className={Styles.filter_options}>0% - 10%</div>
                    <div className={Styles.filter_options}>11% - 20%</div>
                    <div className={Styles.filter_options}>21% - 30%</div>
                    <div className={Styles.filter_options}>31% - 40%</div>
                    <div className={Styles.filter_options}>41% - 50%</div>
                    <div className={Styles.filter_options}>Above 51%</div>
                    </div>
                    <hr/>
                </div>
            <div className={Styles.vertical_line}></div>
            <div>
                <div className={Styles.products_div}>
                    <h4>History & Humanities</h4>
                    <div className={Styles.sort_div}>
                        <label for="cars">Sort By:</label>
                        <select onChange={(e) => sortingData(e.target.value)} name="cars" id="cars">
                            <option value="relevance">Relevance</option>
                            <option value="pLH">Price - Low to High</option>
                            <option value="pHL">Price - High to Low</option>
                            <option value="dLH">Discount - Low to High</option>
                            <option value="dHL">Discount - High to Low</option>
                        </select>
                    </div>
                    </div>
                    <hr/>
                    <div className={Styles.display_books}>{
                        dataOne.map((product,id) => {
                            return (
                                <div key={id}>
                                    <div>
                                    <img className={Styles.books_img} src={product.image} alt="pic"/>
                                    <div className={Styles.book_title}>{product.title}</div>
                                    <div className={Styles.book_author}>{product.author}</div>
                                    <div className={Styles.books_price}>
                                        <div>Rs.{product.price_now}</div>
                                        <div><s>Rs.({product.actual_price})</s></div>
                                    </div>
                                        <div className={Styles.book_avail}>{product.availability}</div>
                                    </div>
                                    <button onClick={() => { addToCart(product) }} className={Styles.cart_btn}>Add to Cart</button>
                                </div>
                            )
                        })
                    }
                    </div>
            </div>
            </div>
        </div>
    )
}


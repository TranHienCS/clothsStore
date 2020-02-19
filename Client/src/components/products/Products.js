import React, { Component } from 'react';
import ProductCard from './productCard/productCard.js';
import './products.css'
class Products extends Component {
    render() {
        return (
            <div className="box">
                <div class="container">
                    <div className="category float-left">
                        <p style={{fontWeight:'bold',fontSize:'16px'}}>Category</p>
                        <ul className="list-cate">
                            <li>All dresses</li>
                            <li>Rompers/Jumpsuits</li>
                            <li>Casual dresses</li>
                            <li>Going out dresses</li>
                            <li>Party/Ocassion dress</li>
                            <li>Mini dresses</li>
                            <li>Maxi/Mididresses</li>
                            <li>Sets</li>
                        </ul>
                        <p style={{fontWeight:'bold',fontSize:'16px',marginTop:'100px'}}>Filter</p>
                    </div>

                    <div className="product-card grid-container">
                        <div><ProductCard></ProductCard></div>
                        <div><ProductCard></ProductCard></div>
                        <div><ProductCard></ProductCard></div>
                        <div><ProductCard></ProductCard></div>
                        <div><ProductCard></ProductCard></div>
                        <div><ProductCard></ProductCard></div>
                        <div><ProductCard></ProductCard></div>
                        <div><ProductCard></ProductCard></div>
                        <div><ProductCard></ProductCard></div>
                        <div><ProductCard></ProductCard></div>
                        <div><ProductCard></ProductCard></div>
                        <div><ProductCard></ProductCard></div>
                        <div><ProductCard></ProductCard></div>
                        <div><ProductCard></ProductCard></div>
                        <div><ProductCard></ProductCard></div>
                        <div><ProductCard></ProductCard></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Products;
import React, { Component } from 'react';
import ProductCard from './productCard/productCard.js';
import './products.css'
import helper from '../../helper/user.js';
import {Link} from "react-router-dom";
const allProduct = require('../../allProduct')
class Products extends Component {

    constructor(props){
        super(props);
        this.state={
            allProduct: allProduct
        }
    }
    async componentDidMount(){
        this.setState({allProduct:await helper.getAllProduct()});
    }
    render() {
        const {allProduct} =this.state;
        const cardProduct = allProduct[0] && allProduct.map((row,i)=>{
            return <ProductCard
                imageURL = {row.image[0]}
                name = {row.name}
                price ={row.price}
                key ={i}
                _id = {row._id}
                />
            })

        return (
            <div className="box">
                <div className="container">
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
                       
                            {cardProduct}

                    </div>
                </div>
            </div>
        );
    }
}

export default Products;
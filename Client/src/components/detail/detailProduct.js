import React, { Component } from 'react';
import './detailProduct.css';
import helper from '../../helper/user.js';
// import productCard from '../products/productCard/productCard';
class detailProduct extends Component {
    constructor(props){
        super(props);
        this.state={
            productItem: ''
        }
    }

    async componentDidMount(){
        this.setState({
            productItem: await this.getItem()
        })
    }

    //  test = async () => {
    //    await window.open('www.gg.com')

    //    return true
    // }

    getItem = async ()=>{
        let id = this.props.match.params.id;
        return await helper.getProductById({"id":id});
    }

    render () {
        const {productItem} = this.state;
        const product = productItem && productItem[0];
        return (
            <div className = "detail-product">
                <div className="product-info">
                    <div className="product-img float-left">
                        <img src ={product.image}></img>
                    </div>
                    <div className="detail float-left">
                        <p className="title">{product.name}</p>
                        <p>${product.price}</p>
                        <div style={{marginBottom: '17px'}}>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                            <span> | 0 Review</span>
                        </div>
                        <div>
                            <p style={{marginBottom:'0',fontWeight:'bold'}}>Size</p>
                            <button className="btn-size">S</button>
                            <button className="btn-size ml-2">M</button>
                            <button className="btn-size ml-2">L</button>
                        </div>
                        <div className="color mt-4">
                        <p style={{marginBottom:'0',fontWeight:'bold'}}>Color</p>
                            <button className="btn-color"></button>
                            <button className="btn-color ml-2"></button>
                            <button className="btn-color ml-2"></button>
                        </div>
                        <div className="counter">
                            <div className="float-left">
                            <span style={{fontWeight:'bold'}}>Quantity</span>
                            </div>
                            <div className="btn-counter float-left ml-5">abc</div>
                        </div>
                        <div className="add-product">
                            <button className="btn btn-primary">Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default detailProduct;
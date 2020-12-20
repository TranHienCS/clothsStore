import React, { Component } from 'react';
import './detailProduct.css';
import helper from '../../helper/user.js';
// import productCard from '../products/productCard/productCard';
import StarRate from './starRate.js';
import {connect} from 'react-redux';
import SelectSize from './selectSize.js';
import Color from './color.js';
import Quantity from './selectQuantity.js';
import {Link} from 'react-router-dom';
import carthelper from '../../helper/cart.js';
import cart from '../cart/cart';
import {AddProductIntoCart} from '../../actions/cartAction.js';
const allProduct = require('../../allProduct')
class detailProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productItem: '',
            counter: 1,
            index: 0,
            size:'',
            color:'',
            quantity:'1',
            stock:'',
            username: 'Guest'
        }
    }

    async componentDidMount() {
        let id = this.props.match.params.id;
        this.setState({
            productItem: allProduct[id-1]
        })



    }

    // getItem = async () => {
    //     let id = this.props.match.params.id;
    //     // return await helper.getProductById({ "id": id });
    //     return allProduct.filter((item)=>item._id===id)

    // }


    selectImg=(i)=>{
        this.setState({
            index: i
        })
    }

    getSize=(size)=>{
        this.setState({
            size:size
        })
    }
    getColor=(color)=>{
        this.setState({
            color:color
        })
    }
    getQuantity=(quantity)=>{
        this.setState({
            quantity:quantity
        })
    }

    submit =async ()=>{
        console.log("🚀 ~ file: detailProduct.js ~ line 82 ~ detailProduct ~ submit= ~ productItem", this.state.productItem)

        let objCart={
            "username": this.state.username,
            "color": this.state.color,
            "size": this.state.size,
            "quantity": this.state.quantity,
            "name": this.state.productItem?.name,
            "price": this.state.productItem?.price,
            "product": this.state.productItem?._id,
            "image": this.state.productItem?.image,
            "priceItem": this.state.productItem?.price*this.state.quantity
        };
        // await carthelper.storeCart(objCart);
        await this.props.AddProductIntoCart(this.state.productItem);
    }
    render() {
        const { productItem,index } = this.state;
        const product = productItem 
        let color =[];

        // product.product&&product.product.map((item,i)=>{
        //     color.push(item.color);
        // })
        return (
            <div className="detail-product">
                <div className="product-info">
                    <div className="product-img float-left">
                        <div className="d-flex align-items-start flex-column bd-highlight float-left" style={{height:'550px'}}>
                            <div onClick={() => this.selectImg(0)} className="bd-highlight child-img mb-auto">
                                <img src={product?.image?product.image[0]:''}></img>
                            </div>
                            <div onClick={() => this.selectImg(1)} className="bd-highlight child-img mb-auto">
                                <img src={product?.image?(product.image[1]?product.image[1]:''):''}></img>
                            </div>
                            <div onClick={() => this.selectImg(2)} className="bd-highlight child-img mb-auto">
                                <img src={product?.image?(product.image[2]?product.image[2]:''):''}></img>
                            </div>
                            <div onClick={() => this.selectImg(3)} className="bd-highlight child-img">
                                <img src={product?.image?(product.image[3]?product.image[3]:''):''}></img>
                            </div>
                        </div>

                        <img src={product?.image?product.image[index]:product?.image}></img>
                        <div className="promotion">
                            <div className="panel-discount">- 50%</div>
                            <div className="panel-discount">Promo</div>
                        </div>
                    </div>
                    <div className="detail float-left">
                        <p className="title">{product.name}</p>
                        <div className="d-flex">
                            <StarRate starYellow={true}></StarRate>
                            <p className="text-review">(1 customer review)</p>
                        </div>
                        <div className="product-description">
                            <p>Mô tả ngắn</p>
                            <div className="row-description">
                            <div className="property">
                                <p >SKU:</p>
                            </div>
                            <div className="value-property">
                                <p className="value-property">76645</p>
                            </div>
                            <div className="property">
                                <p >Brands:</p>
                            </div>
                            <div className="value-property">
                                <p className="value-property">Phúc Lộc Thọ</p>
                            </div>
                            </div>
                            <div className="row-description">
                            <div className="property">
                                <p >Category:</p>
                            </div>
                            <div className="value-property">
                                <p className="value-property">Cơm</p>
                            </div>
                            <div className="property">
                                <p >Stock:</p>
                            </div>
                            <div className="value-property">
                                <p className="value-property">In stock</p>
                            </div>
                            </div>
                        </div>
                        <div className="price-product">
                            <div className="price">
                                <p className="current-price">50,000 VND</p>
                                <p className="real-price">100,000</p>
                            </div>
                            <div className="amount">1</div>
                            <div className="add-cart-btn" onClick={()=> this.submit()}>+ Add to cart</div>
                        </div>
                        {/* <SelectSize getSize ={this.getSize}></SelectSize> */}
                        {/* <Color getColor={this.getColor} color={color}></Color> */}
                        {/* <span className="float-left mt-4 mr-5" style={{ fontWeight: 'bold' }}>Quantity</span> */}
                        {/* <Quantity detail={1} quantity={1} getQuantity ={this.getQuantity}></Quantity> */}
                        {/* <div className="add-product">
                            <Link to ={"/cart/"+this.state.username}>
                            <button type="submit" onClick ={this.submit} className="btn btn-primary">Add to cart</button>
                            </Link>
                        </div> */}
                        <hr></hr>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch =>( {
   
        AddProductIntoCart: (data) => {
            (AddProductIntoCart(data)(dispatch))
        }
    
})
export default connect(null,mapDispatchToProps)(detailProduct);
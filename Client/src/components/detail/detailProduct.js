import React, { Component } from 'react';
import './detailProduct.css';
import helper from '../../helper/user.js';
// import productCard from '../products/productCard/productCard';
import StarRate from './starRate.js';
import {connect} from 'react-redux';
import SelectSize from './selectSize.js';
import Color from './color.js';
import Quantity from './selectQuantity.js';
class detailProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productItem: '',
            counter: 1,
            index: 0
        }
    }

    async componentDidMount() {
        this.setState({
            productItem: await this.getItem()
        })
    }


    getItem = async () => {
        let id = this.props.match.params.id;
        return await helper.getProductById({ "id": id });
    }


    selectImg=(i)=>{
        this.setState({
            index: i
        })
    }
    render() {
        const { productItem,index } = this.state;
        const product = productItem && productItem[0];
        let color =[];
        product.product&&product.product.map((item,i)=>{
            color.push(item.color);
        })
        return (
            <div className="detail-product">
                <div className="product-info">
                    <div className="product-img float-left">
                        <div className="d-flex align-items-start flex-column bd-highlight float-left" style={{height:'550px'}}>
                            <div onClick={() => this.selectImg(0)} className="bd-highlight child-img mb-auto">
                                <img src={product.image?product.image[0]:''}></img>
                            </div>
                            <div onClick={() => this.selectImg(1)} className="bd-highlight child-img mb-auto">
                                <img src={product.image?(product.image[1]?product.image[1]:''):''}></img>
                            </div>
                            <div onClick={() => this.selectImg(2)} className="bd-highlight child-img mb-auto">
                                <img src={product.image?(product.image[2]?product.image[2]:''):''}></img>
                            </div>
                            <div onClick={() => this.selectImg(3)} className="bd-highlight child-img">
                                <img src={product.image?(product.image[3]?product.image[3]:''):''}></img>
                            </div>
                        </div>

                        <img src={product.image?product.image[index]:product.image}></img>

                    </div>
                    <div className="detail float-left">
                        <p className="title">{product.name}</p>
                        <p>${product.price}</p>
                        <StarRate></StarRate>
                        <SelectSize></SelectSize>
                        <Color color={color}></Color>
                        <Quantity></Quantity>
                        <div className="add-product">
                            <button className="btn btn-primary">Add to cart</button>
                        </div>
                        <hr></hr>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        demo: state.product
    }
}
export default connect(mapStateToProps,null)(detailProduct);
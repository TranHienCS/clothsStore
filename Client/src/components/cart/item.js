import React, { Component } from 'react';
import Quantity from '../detail/selectQuantity.js';
import carthelper from '../../helper/cart.js';
class item extends Component {
    constructor(props){
        super(props);
        this.state={
            quantity: this.props.quantity,
            priceItem: 0
        }
    }
    getQuantity=(quantity)=>{
        this.setState({
            quantity:quantity
        })
    }
    removeItem =async ()=>{
        let isDelete= await carthelper.removeItem({id:this.props.id});
        this.props.removeItem(this.props.index);
    }
    render() {
        const {quantity}= this.state;
        return (
            <tr>
                <td>
                    <div className = "image-cart"> 
                        <img className="float-left" src ={this.props.image}></img>
                        <div className="float-left title-item">{this.props.title}</div>
                        <div className="btn-option">
                            <button>Change</button>|
                            <button onClick = {this.removeItem}>Remove</button>
                        </div>
                    </div>
                                
                </td>
                <td><div className="color-item" style={{backgroundColor: `${this.props.color}`}}>
                </div></td>
                <td>{this.props.size}</td>
                <td><Quantity detail={0} quantity={this.props.quantity} getQuantity ={this.getQuantity}></Quantity></td>
                <td>${quantity*this.props.price}</td>
            </tr>
        );
    }
}

export default item;
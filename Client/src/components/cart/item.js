import React, { Component } from 'react';
import Quantity from '../detail/selectQuantity.js';
import carthelper from '../../helper/cart.js';
import {RemoveProductInCart} from '../../actions/cartAction.js';
import {connect} from 'react-redux';
class item extends Component {
    constructor(props){
        super(props);
        this.state={
            quantity: this.props.quantity,
        }
    }
    getQuantity=(quantity)=>{
        this.setState({
            quantity:quantity
        })
        // console.log(this.state.quantity);
        // let isUpdate=await carthelper.updateQuantity({id:this.props.id,quantity:this.state.quantity});
        
    }
    removeItem =async ()=>{
        // console.log(this.state.quantity);
        // console.log(this.props.quantity);
        // let isDelete= await carthelper.removeItem({id:this.props.id});
        await this.props.RemoveProductInCart(this.props.index);
        await this.props.removeItem();
    }
    componentWillReceiveProps(quantity){

    }
    render() {
    
        const {quantity}= this.state;
        // console.log(this.props.quantitySelected);
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
                <td><Quantity index={this.props.index} detail={0} quantity={quantity} getQuantity ={this.getQuantity}></Quantity></td>
                <td>${quantity*this.props.price}</td>
                {/* <td>${this.props.quantitySelected[this.props.index].quantity*this.props.price}</td>
                {this.props.quantity} */}
            </tr>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        RemoveProductInCart: (index) => {
            dispatch(RemoveProductInCart(index))
        }
    }
}

const mapStateToProps = (state) => ({
   
        quantitySelected: state.cart,
        // quantity: state.cart[0].quantity
})


export default connect(mapStateToProps,mapDispatchToProps)(item);
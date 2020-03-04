import React, { Component } from 'react';
import './cart.css';
import carthelper from '../../helper/cart.js';
import get from 'lodash/get';
import Item from './item.js';
import {connect} from 'react-redux';
import {test} from '../../actions/cartAction.js';
class cart extends Component {
    constructor(props){
        super(props);
        this.state={
            quantity:1,
            username: this.props.match.params.slug,
            totalprice: 0
        }
    }
  
    async componentDidMount (){
        // let allitem = await carthelper.getCart({"username":this.state.username});
        // this.setState({allitem})
    }

    remove = async ()=>{
        // let allitem = await carthelper.getCart({"username":this.state.username});
        this.setState({
            allitem:this.props.allitem
        })
    // }
    //  numberitem= (testitem)=>{
    //     return testitem
    }
    
    render() {
        const {allitem,totalprice}= this.props;
     
        return (
            <div>
            <div className ="cart-c">
                <div style ={{fontSize:'24px', fontWeight:'bold',margin: '30px'}}>My Bag</div>
                <div className="table-product">
                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col">Product</th>
                            <th scope="col">Color</th>
                            <th scope="col">Size</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Amount</th>
                        </tr>
                        </thead>
                        <tbody>
                            {allitem.length&&allitem.map((item,i)=>{
                                // console.log(allitem);
                                // console.log("quantity"+item.quantity);
                                 return <Item key ={i}
                                 removeItem = {this.remove}
                                 image = {item.image}
                                 title = {item.name}
                                 size = {item.size}
                                 price = {item.price}
                                 color = {item.color}
                                 quantity= {item.quantity}
                                 id = {item._id}
                                 index = {i}
                             >
                             </Item>
                            }
                            )}
                        </tbody>
                    </table>
                </div>
                <div className="totalPrice">
                    <span style={{fontSize:'16px',fontWeight:'bold'}}>Total</span>
                    <div className="boxPrice">
                       <p><span>Shipping & Handling</span><span className="float-right">Free</span></p>
                       <p><span>Total Product</span><span className="float-right">${totalprice}</span></p>
                       <hr></hr>
                       <p style={{marginBottom:'0'}}><span>SubTotal</span><span className="float-right">${totalprice}</span></p>
                     
                    </div>
                    <button onClick={this.submit} className="btn-checkout">Check out</button>
                    </div>
            </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        allitem: state.cart.product,
        totalprice: state.cart.totalprice,
        testitem: state.cart.number
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        test: () => {
            dispatch(test())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(cart);
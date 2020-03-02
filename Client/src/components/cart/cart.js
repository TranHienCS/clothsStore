import React, { Component } from 'react';
import './cart.css';
import carthelper from '../../helper/cart.js';
import get from 'lodash/get';
import Item from './item.js';
class cart extends Component {
    constructor(props){
        super(props);
        this.state={
            allitem:[],
            quantity:1
        }
    }
  
    async componentDidMount (){
        let username = this.props.match.params.slug;
        let allitem = await carthelper.getCart({"username":username});
        console.log(allitem)
        this.setState({allitem})
    }

    remove =(index)=>{
        this.state.allitem.splice(index,1)
        this.setState({
            allitem: this.state.allitem
        })
    }
    render() {
        const {allitem}= this.state;
        
        
        return (
            <div>
            <div className ="cart-c">
                <div>My Bag</div>
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
                            {allitem.length&&allitem.map((item,i)=>(
                                 <Item key ={i}
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
                            )
                            )}
                        </tbody>
                    </table>
                </div>
                <div className="totalPrice">
                    <span style={{fontSize:'16px',fontWeight:'bold'}}>Total</span>
                    <div className="boxPrice">
                       <p><span>Shipping & Handling</span><span className="float-right">Free</span></p>
                       <p><span>Total Product</span><span className="float-right">$111</span></p>
                       <hr></hr>
                       <p style={{marginBottom:'0'}}><span>SubTotal</span><span className="float-right">$5555</span></p>
                     
                    </div>
                    <button className="btn-checkout">Check out</button>
                    </div>
               
            </div>
            </div>
        );
    }
}

export default cart;
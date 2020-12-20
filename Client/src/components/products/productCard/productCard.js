import React, { Component } from 'react';
import './productCard.css';
import StarRate from '../../detail/starRate';
import {Link} from "react-router-dom";

class productCard extends Component {
    render() {
        return (
            <div className="card product-ca" >
                
                <div className="card-image">
                <div className="discount-percent">
                    <p>- 50%</p>
                </div> 
                    <img className="card-img-top" src={this.props.imageURL} alt="Card image cap" />
                    
                </div>
                <div className="card-body">
                    <div class="d-flex">
                        <p className="card-title" >{this.props.name}</p>
                        <div style={{marginLeft: "auto"}}><StarRate/></div>
                    </div>
                    <p style={{fontSize: "10px", color: "#575757", marginBottom: "0px"}}>Brand</p>
                    <p className="card-price" >${this.props.price}</p>
                    <p className="discount-price" >${this.props.price*2}</p>
                    <Link to={"/product/detail/"+this.props._id}><div className="order-button">Order</div></Link>
                </div>
            </div>
        );
    }
}

export default productCard;
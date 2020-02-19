import React, { Component } from 'react';
import './productCard.css'
class productCard extends Component {
    render() {
        return (
            <div className="card product-ca" style={{width: '170px',border:'none' }}>
                <img className="card-img-top" src={require("../public/product1.png")} alt="Card image cap" />
                <div className="card-body" style={{padding:'0',marginTop:'10px'}}>
                    <p className="card-title" style={{fontSize:'15px',fontWeight:'550',marginBottom:'5px'}}>Button-Down Denim Mini Dress</p>
                    <p className="card-text" style={{fontSize:'13px', color:'#4d4d4d'}}>$69.00</p>
                </div>
            </div>
        );
    }
}

export default productCard;
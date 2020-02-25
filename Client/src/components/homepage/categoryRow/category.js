import React, { Component } from 'react';

class category extends Component {
    render() {
        const {className, category} = this.props
        return (
            <div className={`col pic ${className}`} >
            <div className="bottom">
                <div className="cate">{category}</div>
                <hr className="line"></hr>
                <button className="shop">
                    <a href="/products">
                        Shop now
                    </a>
                </button>
            </div>
        </div>
        );
    }
}

export default category;
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class category extends Component {
    render() {
        const {className, category,cate} = this.props
        return (
            <div className={`col pic ${className}`} >
            <div className="bottom">
                <div className="cate">{category}</div>
                <hr className="line"></hr>
                <button className="shop">
                    <Link to={"/products/"+cate}>
                        Shop now
                    </Link>
                </button>
            </div>
        </div>
        );
    }
}

export default category;
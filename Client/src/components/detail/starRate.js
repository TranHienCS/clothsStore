import React, { Component } from 'react';

class starRate extends Component {
    render() {
        return (
            <div style={{ marginBottom: '17px' }}>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span> | 0 Review</span>
            </div>
        );
    }
}

export default starRate;
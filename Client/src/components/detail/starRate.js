import React, { Component } from 'react';

class starRate extends Component {
    render() {
        return (
            <div style={{ marginBottom: '17px' }}>
                <span className="fa fa-star checked" style={this.props.starYellow?{color: "#FDBC15"}:{}}></span>
                <span className="fa fa-star checked" style={this.props.starYellow?{color: "#FDBC15"}:{}}></span>
                <span className="fa fa-star checked" style={this.props.starYellow?{color: "#FDBC15"}:{}}></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
            </div>
        );
    }
}

export default starRate;
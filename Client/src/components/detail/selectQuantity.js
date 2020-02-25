import React, { Component } from 'react';

class selectQuantity extends Component {
    constructor(props){
        super(props);
        this.state={
            counter: 1
        }
    }
    increase = () => {
        this.setState({ counter: this.state.counter + 1 })
    }

    decrease = () => {
        if (this.state.counter > 1) {
            this.setState({ counter: this.state.counter - 1 })
        }
    }

    render() {
        const {counter} =this.state;
        return (
            <div className="counter">
                            <div className="float-left">
                                <span style={{ fontWeight: 'bold' }}>Quantity</span>
                            </div>
                            <div className="btn-counter float-left ml-5">
                                <button onClick={this.decrease} className="float-left">-</button>
                                <input type="text" value={counter}></input>
                                <button onClick={this.increase} className="float-right">+</button>
                            </div>
                        </div>
        );
    }
}

export default selectQuantity;
import React, { Component } from 'react';

class selectQuantity extends Component {
    constructor(props){
        super(props);
        this.state={
            counter: this.props.detail? 1:this.props.quantity
        }
    }
    increase = () => {
        this.setState({ counter: this.state.counter + 1 })
        this.props.getQuantity(this.state.counter+1);
    }

    decrease = () => {
        if (this.state.counter > 1) {
            this.setState({ counter: this.state.counter - 1 })
            this.props.getQuantity(this.state.counter-1);
        }
        
    }
    getQuantity=(counter)=>{
        this.props.getQuantity(counter);
    }
    render() {
        
        const {counter} =this.state;
        return (
            <div className="counter">
                
                <div className="btn-counter float-left">
                    <button onClick={this.decrease} className="float-left">-</button>
                    <input type="text" value={counter} onChange={()=>this.getQuantity(counter)}></input>
                    <button onClick={this.increase} className="float-right">+</button>
                </div>
            </div>
        );
    }
}

export default selectQuantity;
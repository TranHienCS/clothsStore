import React, { Component } from 'react';
import {IncreaseQuantity} from '../../actions/cartAction.js';
import {DecreaseQuantity} from '../../actions/cartAction.js';
import {connect} from 'react-redux';
class selectQuantity extends Component {
    constructor(props){
        super(props);
        this.state={
            counter: this.props.detail? 1:parseInt(this.props.quantity)
        }
    }

    increase = () => {
        this.setState({ counter: this.state.counter + 1 })
        this.props.getQuantity(this.state.counter+1);
        if(!this.props.detail) this.props.IncreaseQuantity(this.props.index);
    }

    decrease = () => {
        if (this.state.counter > 1) {
            this.setState({ counter: this.state.counter - 1 })
            this.props.getQuantity(this.state.counter-1);
            if(!this.props.detail) this.props.DecreaseQuantity(this.props.index);
        }
        
    }
    getQuantity=(counter)=>{
        this.props.getQuantity(counter);
    }
    render() {
        const {counter} =this.state;
        // console.log("counter "+counter);

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
const mapDispatchToProps = (dispatch) => {
    return {
        IncreaseQuantity: (index) => {
            dispatch(IncreaseQuantity(index))
        },
        DecreaseQuantity: (index) => {
            dispatch(DecreaseQuantity(index))
        }
    }
}
export default connect(null,mapDispatchToProps)(selectQuantity);
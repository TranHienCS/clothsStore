import React, { Component } from 'react';
import {connect} from 'react-redux';
class selectSize extends Component {
    constructor(props){
        super(props);
        this.state={
            size:''
        }
    }

    selectSize=(size,i)=>{
        this.setState({
            size: size
        });
        let btnsize = document.getElementsByName("size");
        btnsize[1].style.backgroundColor="white";
        btnsize[0].style.backgroundColor="white";
        btnsize[2].style.backgroundColor="white";
        btnsize[i].style.backgroundColor="tomato"
        this.props.getSize(size);
    }

    render() {
        return (
            <div>
                <p style={{ marginBottom: '0', fontWeight: 'bold' }}>Size</p>
                <button name ="size" className="btn-size" onClick={()=>this.selectSize('S',0)}>S</button>
                <button name ="size" className="btn-size ml-2" onClick={()=>this.selectSize('M',1)}>M</button>
                <button name ="size" className="btn-size ml-2" onClick={()=>this.selectSize('L',2)}>L</button>
            </div>
        );
    }
}

export default selectSize;
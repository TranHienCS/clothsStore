import React, { Component } from 'react';

class color extends Component {
    constructor(props){
        super(props);
        this.state={
            color:''
        }
    }
    getColor =(color,i)=>{
        this.setState({color:color})
        let btncolor = document.getElementsByClassName('btn-color');
        
        for(let i=0;i<btncolor.length;i++){
                btncolor[i].style.width='30px';
                btncolor[i].style.height='30px';
            }
        btncolor[i].style.width='40px';
        btncolor[i].style.height='40px'
    
    }
    render() {
        const {color} = this.props;
        return (
            <div className="color mt-4">
                <p style={{ marginBottom: '0', fontWeight: 'bold' }}>Color</p>
                {color.map((item,i)=>{
                    const color = item.toLowerCase()
                    if(i===0)
                        return  <button key={i} className="btn-color" onClick={()=>this.getColor(color,i)} style={{backgroundColor:`${color}`}}></button>
                    else
                        return  <button key={i} className="btn-color ml-2" onClick={()=>this.getColor(color,i)} style={{backgroundColor:`${color}`}}></button>
                })}
                
                
            </div>
        );
    }
}

export default color;
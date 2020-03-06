import React, { Component } from 'react';
import ProductCard from './productCard/productCard.js';
import './products.css'
import helper from '../../helper/user.js';
import {Link} from "react-router-dom";
class Products extends Component {

    constructor(props){
        super(props);
        this.state={
            allProduct:[],
            categoryItem:[],
        }
    }
    async componentDidMount(){
        let allProduct = await helper.getAllProduct();
        let categoryItem = allProduct.filter(item=>item.category==this.props.match.params.slug);
        this.setState({
            allProduct,
            categoryItem
        });
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.match.params.slug!=this.props.match.params.slug){
            console.log(nextProps.match.params.slug);
            this.setState({categoryItem:this.state.allProduct.filter(item=>item.category==nextProps.match.params.slug)});
        }
    }
    render() {
    
        const {allProduct,categoryItem} =this.state;
        const cardProduct = categoryItem[0] && categoryItem.map((row,i)=>{
            return <Link to ={"/product/detail/"+row._id}><ProductCard
                imageURL = {row.image[0]}
                name = {row.name}
                price ={row.price}
                key ={i}>
            </ProductCard>
            </Link>
            })

        return (
            <div className="box">
                <div className="container">
                    <div className="category float-left">
                        <p style={{fontWeight:'bold',fontSize:'16px'}}>Category</p>
                        <ul className="list-cate">
                            <li>All dresses</li>
                            <li>Rompers/Jumpsuits</li>
                            <li>Casual dresses</li>
                            <li>Going out dresses</li>
                            <li>Party/Ocassion dress</li>
                            <li>Mini dresses</li>
                            <li>Maxi/Mididresses</li>
                            <li>Sets</li>
                        </ul>
                        <p style={{fontWeight:'bold',fontSize:'16px',marginTop:'100px'}}>Filter</p>
                    </div>

                    <div className="product-card grid-container">
                       
                            {cardProduct}

                    </div>
                </div>
            </div>
        );
    }
}

export default Products;
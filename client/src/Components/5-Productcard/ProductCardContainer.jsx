import "./productcardcontainer.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../Redux/actions/index";
import ProductCard from "./ProductCard/ProductCard";

class ProductCardContainer extends Component {

    componentDidMount() {
        this.props.getAllProducts()
    }

    render(){
        
        let products=[]
        products = this.props.products

        console.log(this.props)

        return(
            <div className="ProductCard-Container">
                <div className="ProductCard-Home">
                    {this.props.products?.map((product) => {
                        return <div key={product.id}>
                            <ProductCard
                                id={product.id}
                                name={product.name}
                                quantity={product.quantity} 
                                description={product.descripton}
                                image={product.image}
                                price={product.price}
                                rating={product.rating}
                            />
                            
                        </div>
                    })}
                    
                </div>
            </div>
        )
    }
};

export const mapStateToProps = (state) => {
    return {
        products: state.products
    }
};

export const mapDispatchToProps = (dispatch) => {
    return {
        getAllProducts: () => dispatch(actions.getAllProducts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductCardContainer);

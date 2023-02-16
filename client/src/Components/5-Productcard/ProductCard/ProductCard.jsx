import "./productcard.css";
import React from "react";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
    return (
        <div className="AllProducts">
            <div className="productContainer">
                <Link to={`/products/${props.id}`}>
                    <img src={props.image} alt="" />
                </Link>
                <p className="productName">{props.name}</p>
                <p className='productPrice'>{props.price}</p>  
                <button className='productCarrito'>agregar al carrito</button>
            </div>
        </div>
    )
};

export default  ProductCard;
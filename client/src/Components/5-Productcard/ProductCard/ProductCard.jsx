import "./productcard.css";
import React from "react";

const ProductCard = (props) => {
    return (
        <div>
            <div>
                <img src={props.image} alt="" />
                <h2>{props.name}</h2>
                <h3>{props.price}</h3>  
            </div>
        </div>
    )
};

export default  ProductCard;
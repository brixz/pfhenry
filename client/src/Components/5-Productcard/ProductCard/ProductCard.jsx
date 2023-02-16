import "./productcard.css";
import React from "react";

const ProductCard = (props) => {
    return (
        <div>
            <div>
                <h4>
                    {console.log(props.name)}
                </h4>
            </div>
        </div>
    )
};

export default  ProductCard;
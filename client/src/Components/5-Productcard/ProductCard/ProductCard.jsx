import "./productcard.css";
import React from "react";
import { Link } from "react-router-dom";
import sinstock from "../../../Images/sinstock.png"

const ProductCard = (props) => {
    return (
        <div className="AllProducts">
            <div className="product-Container">
 
            {(props.quantity === 0) ? 
                ((<div>
                    <img className="SinStockImg" alt="" src={sinstock}/>
                    
                    <Link to={`/products/${props.id}`}>
                        <img src={props.image} alt="" />
                    </Link>
                    <p className="productName">{props.name}</p>
                    <p className='productPrice'>${props.price}</p>  
                    
                </div>)) :  
 
                (<div>
                    <Link to={`/products/${props.id}`}>
                    <img src={props.image} alt="" />
                    </Link>
                    <p className="productName">{props.name}</p>
                    <p className='productPrice'>${props.price}</p>  
                    <button className='productCarrito'>agregar al carrito</button>
                </div>)
                }
            </div>
        </div>
    )
};

export default  ProductCard;
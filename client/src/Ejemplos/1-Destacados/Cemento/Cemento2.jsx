import '../destacados.css';
import React from 'react';
import { Link } from "react-router-dom";
import Img from '../../../Images/Cemento/cemento6.jpeg'

export default function Cemento2() {

    return(
        <div className='AllProducts'>
            <div className='productContainer'>
                <Link to='/details'>
                    <img alt='' src={Img}/>
                </Link>
                <p className='productName'>Blue Flower</p>
                <p className='productPrice'>$1200.00</p>
                <button className='productCarrito'>agregar al carrito</button>
            </div>
        </div>
    )
}
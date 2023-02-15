import '../destacados.css';
import React from 'react';
import { Link } from "react-router-dom";
import Img from '../../../Images/Cemento/cemento1.jpeg'

export default function Cemento1() {

    return(
        <div className='AllProducts'>
            <div className='productContainer'>
                <Link to='/details'>
                    <img alt='' src={Img}/>
                </Link>
                <p className='productName'>Jardinerita</p>
                <p className='productPrice'>$1800.00</p>
                <button className='productCarrito'>agregar al carrito</button>
            </div>
        </div>
    )
}
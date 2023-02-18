import '../destacados.css';
import React from 'react';
import { Link } from "react-router-dom";
import Img from '../../../Images/Animales/elefantes1.webp';

export default function Animal2() {

    return(
        <div className='AllProducts'>
            <div className='productContainer'>
                <Link to='/details'>
                    <img alt='' src={Img}/>
                </Link>
                <p className='productName'>Elefante</p>
                <p className='productPrice'>$2500.00</p>
                <button className='productCarrito'>agregar al carrito</button>
            </div>
        </div>
    )
}
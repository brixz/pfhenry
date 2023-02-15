import '../destacados.css';
import React from 'react';
import { Link } from "react-router-dom";
import Img from '../../../Images/Animales/ballena1.jpeg'

export default function Animal1() {

    return(
        <div className='AllProducts'>
            <div className='productContainer'>
                
                <Link to='/details'>
                    <img alt='' src={Img}/>
                </Link>
                <p className='productName'>Ballena</p>
                <p className='productPrice'>$1800.00</p>
                <button className='productCarrito'>agregar al carrito</button>
            </div>
        </div>
    )
}
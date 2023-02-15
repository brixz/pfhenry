import '../destacados.css';
import React from 'react';
import { Link } from "react-router-dom";
import Img from '../../../Images/Animales/perezoso3.jpeg'

export default function Animal3() {

    return(
        <div className='AllProducts'>
            <div className='productContainer'>
                <Link to='/details'>
                    <img alt='' src={Img}/>
                </Link>
                <p className='productName'>Perezoso</p>
                <p className='productPrice'>$2000.00</p>
                <button className='productCarrito'>agregar al carrito</button>
            </div>
        </div>
    )
}
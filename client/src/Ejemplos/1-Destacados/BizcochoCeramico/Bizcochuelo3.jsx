import '../destacados.css';
import React from 'react';
import { Link } from "react-router-dom";
import Img from '../../../Images/Bizcocho Cerámico/bizcocho1.jpeg'

export default function Bizcochuelo3() {

    return(
        <div className='AllProducts'>
            <div className='productContainer'>
                <Link to='/details'>
                    <img alt='' src={Img}/>
                </Link>
                <p className='productName'>Cebollita</p>
                <p className='productPrice'>$1200.00</p>
                <button className='productCarrito'>agregar al carrito</button>
            </div>
        </div>
    )
}
import '../destacados.css';
import React from 'react';
import { Link } from "react-router-dom";
import Img from '../../../Images/Bizcocho Cerámico/bizcocho5.jpeg'

export default function Bizcochuelo2() {

    return(
        <div className='AllProducts'>
            <div className='productContainer'>
                <Link to='/details'>
                    <img alt='' src={Img}/>
                </Link>
                <p className='productName'>Fridaa</p>
                <p className='productPrice'>$2800.00</p>
                <button className='productCarrito'>agregar al carrito</button>
            </div>
        </div>
    )
}
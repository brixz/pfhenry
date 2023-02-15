import '../destacados.css';
import React from 'react';
import { Link } from "react-router-dom";
import Img from '../../../Images/Colgantes/colgante4.jpeg'

export default function Colgante1() {

    return(
        <div className='AllProducts'>
            <div className='productContainer'>
                <Link to='/details'>
                    <img alt='' src={Img}/>
                </Link>
                <p className='productName'>Donut</p>
                <p className='productPrice'>$1600.00</p>
                <button className='productCarrito'>agregar al carrito</button>
            </div>
        </div>
    )
}
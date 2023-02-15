import '../destacados.css';
import React from 'react';
import { Link } from "react-router-dom";
import Img from '../../../Images/Colgantes/colgante1.jpeg'

export default function Colgante2() {

    return(
        <div className='AllProducts'>
            <div className='productContainer'>
                <Link to='/details'>
                    <img alt='' src={Img}/>
                </Link>
                <p className='productName'>Colgante Vintage</p>
                <p className='productPrice'>$2200.00</p>
                <button className='productCarrito'>agregar al carrito</button>
            </div>
        </div>
    )
}
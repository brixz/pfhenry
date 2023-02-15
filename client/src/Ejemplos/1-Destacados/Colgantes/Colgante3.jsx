import '../destacados.css';
import React from 'react';
import { Link } from "react-router-dom";
import Img from '../../../Images/Colgantes/colgante2.jpeg'

export default function Colgante3() {

    return(
        <div className='AllProducts'>
            <div className='productContainer'>
                <Link to='/details'>
                    <img alt='' src={Img}/>
                </Link>
                <p className='productName'>Paraguita</p>
                <p className='productPrice'>$2000.00</p>
                <button className='productCarrito'>agregar al carrito</button>
            </div>
        </div>
    )
}
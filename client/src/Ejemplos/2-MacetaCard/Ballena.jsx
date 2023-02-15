import './macetacard.css';
import React from 'react';
import Img from '../../Images/Animales/ballena1.jpeg';

export default function Ballena() {

    return(
        <div className='AllMacetacard'>
            <div className='macetacardContainer'>
                <div className='container'>    
                    <div className='imgContainer'>
                        <img alt='' src={Img}/>
                    </div>
                </div>
                <div className='TextContainer'>
                    <p className='macetacardName'>Ballena</p>
                    <p className='macetacardPrice'>$1800.00</p>
                    <p className='descriptionMacetacard'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, ipsa. Dicta, harum! Voluptatum, tempore dolores? Error nostrum magni quae ducimus maiores beatae, et consequuntur iure voluptatibus accusantium incidunt ullam eligendi?</p>
                    <button className='macetacardCarrito'>agregar al carrito</button>
                </div>
                
            </div>
        </div>
    )
}
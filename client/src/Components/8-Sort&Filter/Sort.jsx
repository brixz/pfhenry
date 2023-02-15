import "./sort.css";
import React, { Component } from "react";

export default class Sort extends Component {



    render() {
        return (

            <div className="sort">
               <ul>
                    <li>
                        <button>Más relevantes</button>
                    </li>

                    <li>
                        <button>Menor Precio</button>     
                    </li> 
                
                    <li>
                        <button>Mayor Precio</button>
                    </li>
                </ul>
            </div>
        )

    }
}
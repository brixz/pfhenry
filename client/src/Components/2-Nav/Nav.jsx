import "./nav.css";
import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Nav extends Component {
    render() {
        return (
            <div className="nav">
                <Link className="link" to="/">Inicio</Link>
                <Link className="link">Nosotras</Link>
                <Link to="/Products" className="link-P">
                    Productos   
                    <p className="flecha">▼</p>
                    <ul className="All-Products">
                        <li>
                            <Link className="navLinkAnimales" to="/animales">Animales</Link>
                        </li>
                        <li>
                            <Link className="navLinkBizcocho" to="/bizcocho">Bizcocho Cerámico</Link>
                        </li>
                        <li>
                            <Link className="navLinkCemento" to="/cemento">Cemento</Link>
                        </li>
                        <li>
                            <Link className="navLinkColgante" to="/colgantes">Colgantes</Link>
                        </li>
                        <li>
                            <Link className="navLinkFridas" to="/fridas">Fridas & Baby</Link>
                        </li>
                        <li>
                            <Link className="navLinkOtros" to="/otros">Otros</Link>
                        </li>
                    </ul>
                </Link>
                <Link className="link">Ofertas</Link>
                <Link className="link">Contacto</Link>
                <Link className="link" to='/login'> Login Account</Link>
            </div>
        )
    }
}
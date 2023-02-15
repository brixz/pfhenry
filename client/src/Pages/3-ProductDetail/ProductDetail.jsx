import "./productdetail.css";
import React, { Component } from "react";
import Logo from "../../Components/1-Logo/Logo2";
import Nav from "../../Components/2-Nav/Nav";
import Ballena from "../../Ejemplos/2-MacetaCard/Ballena";

export default class ProductDetail extends Component {
    render(){
        return(
            <div className="Home">
                <div>
                    <Logo/>
                    <Nav/>
                    <Ballena/>
                </div>
            </div>
        )
    }
}
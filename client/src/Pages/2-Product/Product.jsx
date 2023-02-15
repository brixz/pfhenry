import "./product.css";
import React, { Component } from "react";
import Logo from "../../Components/1-Logo/Logo2";
import Nav from "../../Components/2-Nav/Nav";
import MenuHamburguesaFilter from "../../Components/8-Sort&Filter/MenuHamburguesaFilter";

export default class Products extends Component {
    render(){
        return(
            <div className="Home">
                <div>
                    <Logo/>
                    <Nav/>
                    <MenuHamburguesaFilter/>
                </div>
            </div>
        )
    }
}
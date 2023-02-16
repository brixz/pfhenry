import "./product.css";
import React, { Component } from "react";
import Logo from "../../Components/1-Logo/Logo2";
import Nav from "../../Components/2-Nav/Nav";
import BurgerMenu from "../../Components/11-BurgerMenu/1-BurgerMenuProductFilter/BurgerMenuProductFilter";
import ProductCardContainer from "../../Components/5-Productcard/ProductCardContainer";

export default class Products extends Component {
    render(){
        return(
            <div className="Products">
                <div>
                    <Logo/>
                    <Nav/>
                    <BurgerMenu/>                
                </div>
            </div>
        )
    }
}
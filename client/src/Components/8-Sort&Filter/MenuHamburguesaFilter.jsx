import "./menuhamburguesafilter.css";
import React, { useState } from "react";
import Sort from "./Sort";

export default function MenuHamburguesaFilter()  {

    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    const updateMenu = () => {
        if (!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        }
        else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }

    return(
        <div>
           <nav>
                <div className="burger-menu">
                    <div onClick={updateMenu}>
                        <button className="Menu-btn">Ordenar por ▼</button>
                    </div>
                </div>
            </nav>
            <div className={menu_class}>
                <Sort/>
            </div>
        </div>
    )
}

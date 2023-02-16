import "./burgermenusort.css";
import React, { useState } from "react";
import Sort from "../../../8-Sort&Filter/Sort";
import Filter from "../../../8-Sort&Filter/Filter";

export default function BurgerMenuSort()  {

    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    const [burger_class2, setBurgerClass2] = useState("burger-bar3 unclicked")
    const [menu_class2, setMenuClass2] = useState("menu3 hidden")
    const [isMenuClicked2, setIsMenuClicked2] = useState(false)

    //-------------SORT BURGERMENU-------------------

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

    //-------------FILTER BURGERMENU-------------------

    const updateMenu2 = () => {
        if (!isMenuClicked2) {
            setBurgerClass2("burger-bar3 clicked")
            setMenuClass2("menu3 visible")
        }
        else {
            setBurgerClass2("burger-bar3 unclicked")
            setMenuClass2("menu3 hidden")
        }
        setIsMenuClicked2(!isMenuClicked2)
    }

    return(
        <div>
           <nav className="NavOrder">
                <div className="burger-menu">
                    <div onClick={updateMenu}>
                        <button className="Menu-btn">Ordenar por ▼</button>
                    </div>
                </div>
            </nav>
            <div className={menu_class}>
                <Sort/>
            </div>
            <nav className="NavFilter">
                <div className="burger-menu3">
                    <div onClick={updateMenu2}>
                        <button className="Menu-btn3">Categoria▼</button>
                    </div>
                </div>
            </nav>
            <div className={menu_class2}>
                <Filter/>
            </div>
        </div>
    )
}

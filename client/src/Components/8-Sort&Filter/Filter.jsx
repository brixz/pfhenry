import "./filter.css";
import React, { Component } from "react";

export default class Filter extends Component {



    render() {
        return (

            <div className="Filter">
                <ul className="FilterUl">
                    <li>
                        <label>
                            Animales
                            <input type="checkbox" />
                        </label>
                    </li>

                    <li>
                        <label>
                            Bizcocho Ceramico
                            <input type="checkbox" />
                        </label>
                    </li>

                    <li>
                        <label>
                            Cemento
                            <input type="checkbox" />
                        </label>
                    </li>

                    <li>
                        <label>
                            Colgantes
                            <input type="checkbox" />
                        </label>
                    </li>

                    <li>
                        <label>
                            Fridas & Babies
                            <input type="checkbox" />
                        </label>
                    </li>

                    <li>
                        <label>
                            Otros
                            <input type="checkbox" />
                        </label>
                    </li>
                </ul>
            </div>
        )

    }
}
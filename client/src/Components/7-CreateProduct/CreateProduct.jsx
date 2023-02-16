import "./createproduct.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../Redux/actions/index";

class CreateProduct extends Component{

    

    render() {
        return(
            <div>
                <form>
                    <h4>Crear Producto</h4>
                    <div className="createContainer">
                        <label id="src-file">
                            Image:  <input
                                        placeholder="Paste URL Image"
                                        className="ImageInput"
                                        type="text"
                                        name="image"
                                    />
                        </label>

                        <label>
                                Name (4-16):<input
                                    className='name'
                                    type="text"
                                    name="name"
                                    required={true}
                                    minLength="4"
                                    maxLength="16"
                                />
                        </label>

                        <div>
                            <h5>Categoria:</h5>
                            <ul>
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
                        
                        <label>
                                Quantity(1-50): <input
                                    type="number"
                                    name="quantity"
                                    required={true}
                                    min="1"
                                    max="50"
                                />
                        </label>

                        <label className="NameLabel">
                                Description:<input
                                    className='description'
                                    type="text"
                                    name="description"
                                    required={true}
                                    minLength="4"
                                    maxLength="16"
                                />
                        </label>

                        <label>
                                Price: <input
                                    type="number"
                                    required={true}
                                    min="1"
                                />
                        </label>

                        <label>
                                Rating: <input
                                    type="number"
                                    required={true}
                                    min="1"
                                />
                        </label>

                    </div>
                </form>
            </div>
        )
    }
};

export default connect(CreateProduct)
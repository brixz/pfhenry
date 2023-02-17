import "./createproduct.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../Redux/actions/index";

class CreateProduct extends Component{

    constructor(props){
        super(props)
        this.state = {
            input: {
                name: "",
                image:"",
                quantity: 0,
                description: "",
                price:0,
                type:""
            },
        }

        this.enviarDatos = this.enviarDatos.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.isFieldCompleted = this.isFieldCompleted.bind(this)
    }

    enviarDatos(e) {
        const { input } = this.state
        let data = {
            name: input.name,
            image: input.image,
            quantity: input.quantity,
            description: input.description,
            price: input.price,
        }

        e.preventDefault();
        // handleSubmit();
        console.log(data)
        this.props.createProduct(data)
    }

    handleInputChange(e) {
        const { input } = this.state
        let newInput = input
        const key = e.target.name
        const value = e.target.value

        newInput[key] = value
        this.setState({
            ...this.state,
            input: newInput
        })
    }

    handleChange(e) {
        console.log(e.target.files);
    }

    isFieldCompleted() {
        const { input } = this.state
        return (input.name === "" &&
                input.price === 0 &&
                input.quantity === 0) ? true : false
    }

    render() {
        return(
            <div>
                <form onSubmit={this.enviarDatos}>
                    <h4>Crear Producto</h4>
                    <div className="createContainer">
                        <label id="src-file">
                            Image:  <input
                                        placeholder="Paste URL Image"
                                        className="ImageInput"
                                        type="text"
                                        name="image"
                                        value={this.state.input.image}
                                        onChange={this.handleChange}
                                    />
                        </label>

                        <label>
                                Name (4-16):<input
                                    className='name'
                                    type="text"
                                    name="name"
                                    onChange={this.handleInputChange}
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
                                        <input 
                                        name="type"
                                        type="checkbox"
                                        onChange={this.handleChange} />
                                    </label>
                                </li>

                                <li>
                                    <label>
                                        Bizcocho Ceramico
                                        <input 
                                        name="type"
                                        type="checkbox" 
                                        onChange={this.handleChange}/>
                                    </label>
                                </li>

                                <li>
                                    <label>
                                        Cemento
                                        <input
                                        name="type" 
                                        type="checkbox" 
                                        onChange={this.handleChange}/>
                                    </label>
                                </li>

                                <li>
                                    <label>
                                        Colgantes
                                        <input 
                                        name="type"
                                        type="checkbox" 
                                        onChange={this.handleChange}/>
                                    </label>
                                </li>

                                <li>
                                    <label>
                                        Fridas & Babies
                                        <input
                                        name="type"
                                         type="checkbox" 
                                        onChange={this.handleChange}/>
                                    </label>
                                </li>

                                <li>
                                    <label>
                                        Otros
                                        <input
                                        name="type" type="checkbox" 
                                        onChange={this.handleChange}/>
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
                                    onChange={this.handleChange}
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
                                    onChange={this.handleChange}
                                />
                        </label>

                        <label>
                                Price: <input
                                    type="number"
                                    required={true}
                                    name="price"
                                    onChange={this.handleChange}
                                />
                        </label>

                        <label>
                                Rating: <input
                                    type="number"
                                    required={true}
                                    min="1"
                                    name="rating"
                                    onChange={this.handleChange}
                                />
                        </label>

                        <button disabled={this.isFieldCompleted()} className="button-create" type="submit">
                            Create Dog
                        </button>
                    </div>
                </form>
            </div>
        )
    }
};

export const mapDispatchToProps = (dispatch) => {
    return {
        createProduct: (product) => dispatch(actions.createProduct(product))
    }
};


export default connect (mapDispatchToProps)(CreateProduct)
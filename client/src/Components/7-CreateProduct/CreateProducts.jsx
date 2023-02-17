import "./createproducts.css";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as actions from "../../Redux/actions/index";

const CreateProduct = () => {
    
    const [ input, setInput ] = useState({
        name: "",
        image:"https://us.123rf.com/450wm/sudowoodo/sudowoodo1903/sudowoodo190300045/121240702-personaje-de-cactus-de-dibujos-animados-con-flor-y-cara-linda-ilustraci%C3%B3n-de-vector-de-planta-en.jpg?ver=6",
        quantity: 0,
        description: "",
        price:0,
        type:[""]
    });

    const [ typeArray, setTypeArray ] = useState([])

    const handleInputChange = (e) => {
        setInput({
            ...input,
            [ e.target.name ] : e.target.value,
        })
    }

    const dispatch = useDispatch();

    const handleSubmit = () => {
        
        setInput({
            ...input,
            [ "type" ] : typeArray,
        })
        let req = input
        req.type = typeArray
        dispatch(actions.createProduct(req))

        console.log(req)
    }

    const enviarDatos = (e) => {
        e.preventDefault();
        handleSubmit();
    }

    const [ file, setFile ] = useState([]);

    const handleChange = (e) => {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));

        setInput({
            ...input,
            [e.target.name] : e.target.value,
        })
    }

    const handleCheckChange = (e) => {
        const value = e.target.value;
        const checked = e.target.checked;
        console.log(value, checked);

        if(checked){
            setTypeArray([
                ...typeArray, value
            ])
        } else {
            setTypeArray(typeArray.filter((e) => (e !== value)))
        }
    }

    //const isFieldCompleted = () => {
        //const { input } = state
        //return (input.name === "" &&
        //input.price === 0 &&
        //input.quantity === 0) ? true : false
    //}

    return(
        <div>
           <form onSubmit={enviarDatos}>
                
                <h4>Crear Producto</h4>
                
                <div className="createContainer">
                    
                    <label id="src-file">
                        Image:  
                        <input
                            placeholder="Paste URL Image"
                            className="ImageInput"
                            type="file"
                            name="image"
                            onChange={handleChange}
                        />

                        <img
                            className="CreateImg"
                            type="image"
                            src={file}
                        />
                    </label>

                    <label>
                        Name (4-16):
                        <input
                            className='name'
                            type="text"
                            name="name"
                            onChange={handleInputChange}
                            required={true}
                            minLength="4"
                            maxLength="30"
                        />
                        
                    </label>

                    <div>
                        <label htmlFor="">
                            Categoria:
                        </label>
                
                        <ul>
                            <li>
                                <label htmlFor="">
                                    Animales
                                    <input 
                                        name="type"
                                        type="checkbox"
                                        value="animales"
                                        onChange={handleCheckChange} />
                                </label>
                            </li>

                            <li>
                                <label>
                                    Bizcocho Ceramico
                                    <input 
                                        name="type"
                                        type="checkbox"value="bizcochoceramico" 
                                        onChange={handleCheckChange} />
                                </label>
                            </li>

                            <li>
                                <label>
                                    Cemento
                                    <input
                                        name="type" 
                                        type="checkbox"value="cemento"
                                        onChange={handleCheckChange} />
                                </label>
                            </li>

                            <li>
                                <label>
                                    Colgantes
                                    <input 
                                        name="type"
                                        type="checkbox"value="colgantes" 
                                        onChange={handleCheckChange} />
                                </label>
                            </li>

                            <li>
                                <label>
                                    Fridas & Babies
                                    <input
                                        name="type"
                                        type="checkbox"
                                        value="fridas&baby" 
                                        onChange={handleCheckChange} />
                                </label>
                            </li>

                            <li>
                                <label>
                                    Otros
                                    <input
                                        name="type" 
                                        type="checkbox"
                                        value="otros" 
                                        onChange={handleCheckChange} />
                                </label>
                            </li>
                        </ul>
                    </div>
                        
                    <label>
                        Quantity(1-50): 
                        <input
                            type="number"
                            name="quantity"
                            required={true}
                            min="1"
                            max="50"
                            onChange={handleInputChange}
                            />
                    </label>

                    <label className="NameLabel">
                        Description:
                        <input
                        className='description'
                        type="text"
                        name="description"
                        required={true}
                        minLength="4"
                        maxLength="300"
                        onChange={handleInputChange}
                             />
                    </label>

                    <label>
                        Price: 
                        <input
                            type="number"
                            required={true}
                            name="price"
                            onChange={handleInputChange}
                        />
                    </label>

                    <label>
                        Rating: 
                        <input
                            type="number"
                            required={true}
                            min="1"
                            name="rating"
                            onChange={handleInputChange}
                        />
                    </label>

                    <button //disabled={isFieldCompleted()}
                     className="button-create" type="submit">
                        Create Product
                    </button>
                </div>
            </form> 
        </div>
    )

};
 export default CreateProduct;
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
        <div className="Create-Component">
           <form onSubmit={enviarDatos}>
                
                <h4>Crear Producto</h4>
                
                <div className="createContainer">
                    <ul>
                        <li>
                            <label className="ImageLabel" id="src-file">
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
                        </li>

                        <li>
                            <label className="nameLabel">
                                Name (4-30):
                                <input
                                    className='nameInput'
                                    type="text"
                                    name="name"
                                    onChange={handleInputChange}
                                    required={true}
                                    minLength="4"
                                    maxLength="30"
                                />
                            </label>
                        </li>

                        <li>
                            <div className="CategoriaContainer">
                                <label className="categoriaLabel" htmlFor="">
                                    Categoria:
                                </label>
                
                                <div className="AllCategoriesContainer">
                            
                                    <label htmlFor="">
                                        Animales
                                        <input 
                                            name="type"
                                            type="checkbox"
                                            value="animales"
                                            onChange={handleCheckChange} />
                                    </label>
                            
                                    <label>
                                        Bizcocho Ceramico
                                        <input 
                                            name="type"
                                            type="checkbox"value="bizcochoceramico" 
                                            onChange={handleCheckChange} />
                                    </label>
                            
                                    <label>
                                        Cemento
                                        <input
                                            name="type" 
                                            type="checkbox"value="cemento"
                                            onChange={handleCheckChange} />
                                    </label>
                            
                                    <label>
                                        Colgantes
                                        <input 
                                            name="type"
                                            type="checkbox"value="colgantes" 
                                            onChange={handleCheckChange} />
                                    </label>
                           
                                    <label>
                                        Fridas & Babies
                                        <input
                                            name="type"
                                            type="checkbox"
                                            value="fridas&baby" 
                                            onChange={handleCheckChange} />
                                    </label>
                           
                                    <label>
                                        Otros
                                        <input
                                            name="type" 
                                            type="checkbox"
                                            value="otros" 
                                            onChange={handleCheckChange} />
                                    </label>

                                </div>  
                            </div>
                        </li>

                        <li>                        
                            <label className="quantityLabel">
                                Quantity(1-50): 
                                <input
                                    className="quantityInput"
                                    type="number"
                                    name="quantity"
                                    required={true}
                                    min="1"
                                    max="50"
                                    onChange={handleInputChange}
                                />
                            </label>
                        </li>

                        <li>
                            <label className="descriptionLabel">
                                Description:
                                <input
                                    className='descriptionInput'
                                    type="text"
                                    name="description"
                                    required={true}
                                    minLength="4"
                                    maxLength="300"
                                    onChange={handleInputChange}
                                />
                            </label>
                        </li>
                        <li>
                            <label className="priceLabel">
                                Price: 
                                <input
                                    className="priceInput"
                                    type="number"
                                    required={true}
                                    name="price"
                                    onChange={handleInputChange}
                                />
                            </label>
                        </li>    
                        
                        <li>
                            <label className="ratingLabel">
                                Rating(1-5): 
                                <input
                                    className="ratingInput"
                                    type="number"
                                    required={true}
                                    min="1"
                                    max="5"
                                    name="rating"
                                    onChange={handleInputChange}
                                />
                            </label>
                        </li>
                    </ul>
                    
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
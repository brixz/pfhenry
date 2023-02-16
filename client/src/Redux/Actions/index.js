import axios from "axios";

export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const GET_PRODUCTS_DETAIL = "GET_PRODCUTS_DETAIL";
export const CREATE_PRODUCT = "CREATE_PRODUCT";

const MY_API = "http://localhost:3001"

export const getAllProducts = () => {
    return (dispatch) => {
        return axios.get(`${MY_API}/`)
        .then(res => dispatch({
            type:GET_ALL_PRODUCTS, 
            payload: res.data
        }))
    }
}

export const getProdcutDetail = (id) => {
    return (dispatch) => {
        return axios.get(`${MY_API}/${id}`)
            .then(res => dispatch({ 
                type: GET_PRODUCTS_DETAIL, 
                payload: res.data }))
    }
}

export const createProduct = (product) => {
    return (dispatch) => {
        return axios.post(`${MY_API}/`, product)

            .then(res => dispatch({ 
                type: CREATE_PRODUCT, 
                payload: res.data }))
    }
}
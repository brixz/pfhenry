import * as actions from "../actions/index";

const initialState = {
    products: [],
    productDetail:{},
}

const rootReducer = (state = initialState, action) => {
    switch (action.type){
        case actions.GET_ALL_PRODUCTS:
        return {
            ...state,
            products: action.payload.products,
            productDetail: {},
        }
        case actions.GET_PRODUCTS_DETAIL: return{
            ...state,
            products: [],
            productDetail: action.payload,
        }
        case actions.CREATE_PRODUCT: return {
            products: [...state.products, action.payload],
            productDetail: {},
        }
    }
}

export default rootReducer;
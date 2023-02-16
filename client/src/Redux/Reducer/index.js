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
            products: actions.payload.products,
            productDetail: {},
        }
        case actions.GET_PRODUCTS_DETAIL: return{
            ...state,
            products: [],
            productDetail: actions.payload,
        }
        case actions.CREATE_PRODUCT: return {
            products: [...state.products, actions.payload],
            productDetail: {},
        }
    }
}
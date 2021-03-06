import { 
    PRODUCTS_LIST_REQUEST, 
    PRODUCTS_LIST_SUCCESS, 
    PRODUCTS_LIST_FAIL, 
    PRODUCT_DETAILS_REQUEST, 
    PRODUCT_DETAILS_SUCCESS, 
    PRODUCT_DETAILS_FAIL
} from "../constants/productConstants";


export const productsListReducer = (state = { loading: true, products: [] }, action) => {
    switch(action.type) {
        case PRODUCTS_LIST_REQUEST:
            return { loading: true };
        case PRODUCTS_LIST_SUCCESS:
            return { loading: false, products: action.payload };
        case PRODUCTS_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state
    }
}

export const productDetailsReducer = (state = { loading: true, product: {} }, action) => {
    switch(action.type) {
        case PRODUCT_DETAILS_REQUEST:
            return { loading: true };
        case PRODUCT_DETAILS_SUCCESS:
            return { loading: false, product: action.payload };
        case PRODUCT_DETAILS_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state
    }
}

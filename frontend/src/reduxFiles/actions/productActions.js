import axios from "axios";
import {  
    PRODUCTS_LIST_REQUEST, 
    PRODUCTS_LIST_SUCCESS, 
    PRODUCTS_LIST_FAIL,
    PRODUCT_DETAILS_REQUEST, 
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL
} from "../constants/productConstants"


export const listProducts = () =>  async (dispatch) => {
    dispatch({ 
        type: PRODUCTS_LIST_REQUEST
    });
    try {
        const { data } = await axios.get('/api/products');
        dispatch({ type: PRODUCTS_LIST_SUCCESS, payload: data })
    } catch(error) {
        dispatch({ type: PRODUCTS_LIST_FAIL, payload: error.message })
    }
}

export const detailsProduct = (productId) =>  async (dispatch) => {
    dispatch({ 
        type: PRODUCT_DETAILS_REQUEST, payload: productId
    });
    try {
        const { data } = await axios.get(`/api/products/${productId}`);
        dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data })
    } catch(error) {
        dispatch({ 
            type: PRODUCT_DETAILS_FAIL, 
            payload: error.response && error.response.data.message 
                ? error.response.data.message 
                : error.message 
        });
    }
};
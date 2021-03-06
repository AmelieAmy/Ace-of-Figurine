import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { 
    productDetailsReducer, 
    productsListReducer 
} from './reduxFiles/reducers/productReducers';


const initialState = {};
const reducer = combineReducers({
    productList: productsListReducer,
    productDetails: productDetailsReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
);

export default store;
import React from 'react';
import { Switch, Route } from "react-router-dom";

import ProductsListScreen from "../screenComponents/ProductsList/ProductsListScreen";
import ProductDetailsScreen from "../screenComponents/ProductDetails/ProductDetailsScreen";
import CartScreen from '../screenComponents/Cart/CartScreen';


const App = () => {

    return (
        <Switch>
            <Route path="/cart/:id?" component={CartScreen} ></Route>
            <Route path="/product/:id" component={ProductDetailsScreen} ></Route>
            <Route path="/" component={ProductsListScreen} exact ></Route>
        </Switch>
    );

}

export default App;

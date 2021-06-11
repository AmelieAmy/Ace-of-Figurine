import React from 'react';
import { Switch, Route } from "react-router-dom";

import ProductsListScreen from "../screenComponents/ProductsList/ProductsListScreen";
import PDS from "../screenComponents/ProductDetails/ProductDetailsScreen";


const App = () => {

    return (
        <Switch>
            <Route path="/product/:id" component={PDS} ></Route>
            <Route path="/" component={ProductsListScreen} exact ></Route>
        </Switch>
    );

}

export default App;

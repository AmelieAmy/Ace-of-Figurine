import React from 'react';
import { Switch, Route } from "react-router-dom";

import ProductsScreen from "../screenComponents/Products/ProductsScreen";
import PDS from "../screenComponents/ProductDetails/ProductDetailsScreen";


const App = () => {

    return (
        <Switch>
            <Route path="/product/:id" component={PDS} ></Route>
            <Route path="/" component={ProductsScreen} exact ></Route>
        </Switch>
    );

}

export default App;

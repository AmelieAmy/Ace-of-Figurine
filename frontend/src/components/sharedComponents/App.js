import React from 'react';
import { Switch, Route } from "react-router-dom";

import SPM from "../screenComponents/ProductMiniature/ProductMiniatureScreen";
import PDS from "../screenComponents/ProductDetails/ProductDetailsScreen";


const App = () => {

    return (
        <Switch>
            <Route path="/product/:id" component={PDS} ></Route>
            <Route path="/" component={SPM} exact ></Route>
        </Switch>
    );

}

export default App;

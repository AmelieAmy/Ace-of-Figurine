import React from 'react';
import { Switch, Route } from "react-router-dom";

// Component links
import SPM from "../screenComponents/ProductMiniature/ScreenProductMiniature";


const App = () => {

    return (
        <Switch>
            <Route path="/" exact >
                <SPM />
            </Route>
        </Switch>
    );

}

export default App;

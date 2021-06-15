import React, { useEffect, useState } from 'react';
import { Switch, Route } from "react-router-dom";

import ProductsListScreen from "../screenComponents/ProductsList/ProductsListScreen";
import ProductDetailsScreen from "../screenComponents/ProductDetails/ProductDetailsScreen";
import CartScreen from '../screenComponents/Cart/CartScreen';


const App = () => {

    const savedCart = localStorage.getItem('cart')
	const [cart, setCart] = useState(savedCart ? JSON.parse(savedCart) : 0)
	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])

    return (
        <Switch>
            <Route path="/cart/:id?">
                <CartScreen cart={cart} setCart={setCart} />
            </Route>
            <Route path="/product/:id">
                <ProductDetailsScreen cart={cart} setCart={setCart} />
            </Route>
            <Route path="/" exact>
                <ProductsListScreen cart={cart} setCart={setCart} />
            </Route>
        </Switch>
    );

}

export default App;

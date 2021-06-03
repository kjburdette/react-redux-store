import React from 'react';
import AboutUs from './AboutUs';
import Home from './Home'
import ShoppingCart from './ShoppingCart';
import Products from './Products';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';

export default function Navbar() {
    return (
        <div className="Navbar">
            <Router>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/products">Products</Link>
                    <Link to="/shoppingcart">Shopping Cart</Link>
                    <Link to="/aboutus">About Us</Link>
                </nav>
                <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/shoppingcart">
                    <ShoppingCart />
                </Route>
                <Route exact path="/aboutus">
                    <AboutUs />
                </Route>
                <Route exact path="/products">
                    <Products />
                </Route>
                <Route exact path="/*">
                    <Redirect to="/"/>
                </Route>
                </Switch>
            </Router>
        </div>
    )
}

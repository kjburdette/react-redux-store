import React from 'react';
import MensClothing from './MensClothing';
import WomensClothing from './WomensClothing';
import Jewelery from './Jewelery';
import Electronics from './Electronics';
import AboutUs from './AboutUs';
import Home from './Home'
import ShoppingCart from './ShoppingCart';
import Product from './Product';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';

export default function Navbar() {
    return (
        <div className="Navbar">
            <Router>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/mensclothing">Men's Clothing</Link>
                    <Link to="/womensclothing">Women's Clothing</Link>
                    <Link to="/jewelery">Jewelery</Link>
                    <Link to="/electronics">Electronics</Link>
                    <Link to="/shoppingcart">Shopping Cart</Link>
                    <Link to="/aboutus">About Us</Link>
                </nav>
                <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/mensclothing">
                    <MensClothing />
                </Route>
                <Route exact path="/womensclothing">
                    <WomensClothing />
                </Route>
                <Route exact path="/jewelery">
                    <Jewelery />
                </Route>
                <Route exact path="/electronics">
                    <Electronics />
                </Route>
                <Route exact path="/shoppingcart">
                    <ShoppingCart />
                </Route>
                <Route exact path="/aboutus">
                    <AboutUs />
                </Route>
                <Route exact path="/product">
                    <Product />
                </Route>
                <Route exact path="/*">
                    <Redirect to="/"/>
                </Route>
                </Switch>
            </Router>
        </div>
    )
}

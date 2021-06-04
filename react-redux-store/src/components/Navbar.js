import React from 'react';
import AboutUs from './AboutUs';
import Home from './Home'
import ShoppingCart from './ShoppingCart';
import Products from './Products';
import SingleProduct from './SingleProduct';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

export default function Navig() {
    return (
        <div>
            <Router>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand>The Kitchen Sink</Navbar.Brand>
                    <Nav className="mr-auto">
                    <Link to="/" className="navLink">Home</Link>
                    <Link to="/products" className="navLink">Products</Link>
                    <Link to="shoppingcart" className="navLink">Shopping Cart</Link>
                    <Link to="aboutus" className="navLink">About Us</Link>
                    </Nav>
                </Navbar>
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
                <Route path="/products/:id">
                    <SingleProduct />
                </Route>
                <Route exact path="/*">
                    <Redirect to="/"/>
                </Route>
                </Switch>
            </Router>
        </div>
    )
}

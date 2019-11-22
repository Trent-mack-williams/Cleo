import React from "react";
import NavBar from "./components/navBar.jsx";
import HomePage from "./components/homePage.jsx";
//import ProductLine from "./components/productLine.jsx";
//import ProductList from "./components/productList.jsx";
//import ProductPage from "./components/productPage.jsx";
//import CheckOut from "./components/checkOut.jsx";
//import LogInForm from "./components/logInForm.jsx";
//import SignUpForm from "./components/signUpForm.jsx";
//import NotFound from "./components/notFound.jsx";
import { Route, Redirect, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main role="main">
        <Switch>
          <Route path="/Home" component={HomePage} />
          <Redirect from="/" exact to="/Home" />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;

//          <Route path="/Moss-and-Clay" component={ProductLine} />
//          <Route path="/Milk-and-Honey" component={ProductLine} />
//          <Route path="/All-products" component={ProductList} />
//          <Route path="/Product/:id" component={ProductPage} />
//          <Route path="/Check-out" component={CheckOut} />
//          <Route path="/Login" component={LogInForm} />
//          <Route path="/Sign-up" component={SignUpForm} />
//          <Route path="/Not-Found" component={NotFound} />
//          <Redirect to="/Not-Found" />

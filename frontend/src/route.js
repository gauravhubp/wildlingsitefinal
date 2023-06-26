import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";
 
import CartList from "./CartList";
import App from "./App";
import React from "react";
    
  function Root() {
    return (
      <>
        {/* This is the alias of BrowserRouter i.e. Router */}
        <Router>
          <Switch>
          
            <Route exact path="/" component={App} />
        
            <Route path="/cart" component={CartList} />
              
            <Redirect to="/" component={App}/>
          </Switch>
        </Router>
      </>
    );
  }
    
  export default Root;
import React, { Component } from "react";
import "./App.css";
import Header from "./components/header";
import Product from "./components/product";

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header></Header>
        <Product
          name="Apple Iphone 6 plus"
          price="16.000.000"
          img="https://images.unsplash.com/photo-1575695342320-d2d2d2f9b73f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c21hcnQlMjBwaG9uZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
        />
        <Product
          name="Apple Iphone 7 plus"
          price="17.000.000"
          img="https://www.oppo.com/content/dam/oppo/common/mkt/v2-2/f17-pro/navigation/F17%20pro-navigation-blue-v2.png"
        />
        <Product
          name="Apple Iphone 8 plus"
          price="18.000.000"
          img="https://images.unsplash.com/photo-1575695342320-d2d2d2f9b73f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c21hcnQlMjBwaG9uZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
        />
      </div>
    );
  }
}

export default App;

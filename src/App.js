import React, { Component } from "react";
import Header from "./components/header";
import Product from "./components/product";

class App extends Component {

  // constructor(props){
  //   super(props);
  //   this.onAddProduct = this.onAddProduct.bind(this);
  // }

  onClick=()=>{
    console.log('gbgbgb ');
  }

  onAddProduct=()=>{
    console.log(this.refs);
  }
  render() {
    let product = [
      {
        id: 1,
        name: "Apple Iphone 6 plus",
        price: 1200000,
        img: "https://images.unsplash.com/photo-1575695342320-d2d2d2f9b73f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c21hcnQlMjBwaG9uZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
        status: true,
      },
      {
        id: 2,
        name: "Samsung",
        price: 1200000,
        img: "https://images.unsplash.com/photo-1575695342320-d2d2d2f9b73f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c21hcnQlMjBwaG9uZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
        status: false,
      },
      {
        id: 3,
        name: "Oppo",
        price: 1200000,
        img: "https://images.unsplash.com/photo-1575695342320-d2d2d2f9b73f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c21hcnQlMjBwaG9uZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
        status: true,
      },
    ];

    let elements = product.map((x, index) => {
      if (x.status === true) {
        return (
          <Product key={x.id} price={x.price} img={x.img}>
            {x.name}
          </Product>
        );
      }
    });
    console.log(elements);
    return (
      <div>
        <Header></Header>
        <div className="container">
          <div className="col-12">
            <h3 className="">Thêm sản phẩm</h3>
            <div className="form-group">
              <label htmlFor="">Tên sp</label>
              <input ref="name" type="text" className="form-control" placeholder=""/>
              <button onClick={this.onAddProduct} type="button" class="btn btn-primary">Lưu</button>
            </div>
          </div>
          <div className="row">{elements}</div>
          <div className="col-12">
            <button type="button" className="btn btn-dark" onClick={this.onClick}>
              Click me
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import Header from "./components/header";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
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
      ],
      isActive: true,
    };
  }

  onClick = () => {
    console.log("gbgbgb ");
  };

  onAddProduct = () => {
    console.log(this.refs);
  };

  onSetState = () => {
    console.log("dc ne");

    // cach viet 1
    // if (this.state.isActive === true) {
    //   this.setState({
    //     isActive: false
    //   });
    // }
    // else{
    //   this.setState({
    //     isActive: true
    //   });
    // }

    // cach viet 2
    this.setState({ isActive: !this.state.isActive });
  };
  
  render() {
    console.log(this.state.isActive);
    let elements = this.state.products.map((product, index) => {
      let result = "";
      if (this.state.isActive === true) {
        result = (
          <tr key={index}>
            <td scope="row">{index}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
          </tr>
        );
        return result;
      }
    });
    return (
      <div>
        <Header></Header>
        <div className="container">
          <div className="col-12">
            <table className="table">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Tên sản phẩm</th>
                  <th>Giá</th>
                </tr>
              </thead>
              <tbody>{elements}</tbody>
            </table>
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.onSetState}
            >
              Active : {this.state.isActive === true ? "true" : "false"}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

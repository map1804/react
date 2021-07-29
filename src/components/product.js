import React, { Component } from "react";

class Product extends Component {
  // constructor(props) {
  //   super(props);
  //   this.onAddToCart = this.onAddToCart.bind(this);
  // }
  // onAddToCart(text) {
  //   // console.log(id);
  //   alert(this.props.children + " - " + this.props.price);
  //   console.log(this.props.children);
  // }

  onAddToCart2 = () => {
    // console.log(id);
    alert(this.props.children + " - " + this.props.price);
    console.log(this.props.children);
  };
  render() {
    return (
      <div className="col-lg-4">
        <div className="card text-left">
          <img alt={this.props.name} src={this.props.img} />
          <div className="card-body">
            <h5 className="card-title">{this.props.children}</h5>
            <p className="card-text">{this.props.price}</p>
            <button className="btn btn-primary" onClick={this.onAddToCart2}>
              Mua ngay
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;

import React, { Component } from "react";

class Product extends Component {
  render() {
    return (
      <div className="px-5 py-3">
        <div className="row">
          <div className="col-lg-3">
            <div className="card text-left">
              <img alt={this.props.name} src={this.props.img} />
              <div className="card-body">
                <h5 className="card-title">{this.props.name}</h5>
                <p className="card-text">{this.props.price}</p>
                <button className="btn btn-primary">Mua ngay</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;

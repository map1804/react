import React, { Component } from "react";

class ExJSX extends Component {
  showInfoProduct(product) {
    if (product.status) {
      return (
        <p>
          ID : {product.id}
          Name : {product.name}
          Status : {product.status ? "Active" : "Pending"}
        </p>
      );
    }
  }

  render() {
    let a = 3;
    let b = 4;

    let product = {
      id: 1,
      name: "Phượng",
      status: true,
    };

    let users = [
      { id: 1, name: "Phượng", age: 20 },
      { id: 2, name: "Thành", age: 13 },
      { id: 3, name: "Huyền", age: 16 },
    ];

    let elements = users.map((x) => {
      // console.log(x.id);
      return (
        <div key={x.id}>
          <h2>ID:{x.id}</h2>
          <p>Tên:{x.name}</p>
          <p>Tuổi:{x.age}</p>
        </div>
      );
    });
    return (
      <div className="p-5">
        <h2 className="text-center">JSX</h2>
        <h2>{a + b}</h2>
        {this.showInfoProduct(product)}
        <hr></hr>
        {elements}
        <h2 className="text-center">Props</h2>
        <div className="row">
          <div className="col-lg-3">
            <div className="card text-left">
              <img alt="iphone 6" />
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

export default ExJSX;
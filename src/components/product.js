import React, { Component } from "react";

class Product extends Component {
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

    let elements=users.map((x)=>{
      // console.log(x.id);
      return <div key={x.id}>
        <h2>ID:{x.id}</h2>
        <p>Tên:{x.name}</p>
        <p>Tuổi:{x.age}</p>
      </div>
    })
    return (
      <div>
        <div className="row">
          <div className="col-lg-12">
            <div className="card text-left">
              <img alt="iphone 6" />
              <div className="card-body">
                <h4 className="card-title">Title</h4>
                <p className="card-text">Body</p>
              </div>
            </div>
          </div>
        </div>
        <h2>{a + b}</h2>
        {this.showInfoProduct(product)}
        {/* <br></br> */}
        <hr></hr>
        {elements}
      </div>
    );
  }
}

export default Product;

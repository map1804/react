import React, { Component } from "react";

class ColorPicker extends Component {
  changeSize = (value) => {
    console.log(value);
    this.props.onChangeSize(value)
  };

  render() {
    return (
      <div className="card">
        <div className="card-header">
          <p>Size : {this.props.fontSize} px</p>
        </div>
        <div className="card-body">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => this.changeSize(-2)}
          >
            Giảm
          </button>
          <button
            type="button"
            className="ml-3 btn btn-primary"
            onClick={() => this.changeSize(+2)}
          >
            Tăng
          </button>
        </div>
      </div>
    );
  }
}
export default ColorPicker;

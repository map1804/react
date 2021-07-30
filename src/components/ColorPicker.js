import React, { Component } from "react";

class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: ["red", "green", "blue", "#CCC"],
    };
  }

  showColor = (color) => {
    return {
      backgroundColor: color,
    };
  };

  setActiveColor=(color)=>{
      this.props.onReceiveColor(color);
   
  }

  render() {
    let elmColors = this.state.colors.map((color, index) => {
      return (
          <button
            className="btn ml-3"
            key={index}
            style={this.showColor(color)}
            className={this.props.color === color ? "active" : "mau"}
            onClick={()=>this.setActiveColor(color)}
          ></button>
      );
    });
    return (
      <div className="card">
        <div className="card-header">Color Picker</div>
        <div className="card-body py-5">{elmColors}</div>
      </div>
    );
  }
}
export default ColorPicker;

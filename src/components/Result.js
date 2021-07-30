import React, { Component } from "react";

class Result extends Component {
  setStyle = () => {
    return {
      color : this.props.color,
      borderColor : this.props.color,
      fontSize : this.props.fontSize
    }
  };
  render() {
    return (
      <div className="mt-5">
        <p>Color : {this.props.color} - Fontsize : {this.props.fontSize}px</p>
        <div className="border-blue" style={this.setStyle()}>
          <p className="p-1">noi dung setting</p>
        </div>
      </div>
    );
  }
}
export default Result;

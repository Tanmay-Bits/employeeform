import React, { Component } from "react";
import "./Center.css";
import TextBox from "./input.jsx";

class Form extends Component {
  state = {
    imageUrl: "https://i.ibb.co/0FCBcn5/blank-profile-picture.png"
  };

  render() {
    return (
      <div>
        <h6 style={{ opacity: "0.5" }}> AFour New Joinee </h6>
        <h4>AFour Welcome Form</h4>
        <div style={{ backgroundColor: "#ebeff5" }}>
          <img
            src={this.state.imageUrl}
            class="Center"
            style={{ height: 150 }}
          />
          <figcaption
            style={{
              color: "blue",
              textAlign: "center"
            }}
          >
            Change/Upload Photo
          </figcaption>
        </div>
        <div style={{ backgroundColor: "#ebeff5" }}>
          <TextBox />
        </div>
      </div>
    );
  }
}

export default Form;

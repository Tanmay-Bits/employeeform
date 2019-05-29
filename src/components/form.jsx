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
        <h6 style={{ color: "grey" }}> AFour New Joinee </h6>
        <h4>AFour Welcome Form</h4>
        <div style={{ backgroundColor: "#ebeff5" }}>
          <figure>
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
          </figure>
        </div>
        <div style={{ fontStyle: "bold" }}>
          First Name
          <TextBox />
        </div>
      </div>
    );
  }
}

export default Form;

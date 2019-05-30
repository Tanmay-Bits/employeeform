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

        <div style={{ backgroundColor: "#ebeff5" }}>
          <button
            style={{
              borderColor: "red",
              backgroundColor: "#fff",
              borderRadius: "100px",
              color: "red",
              padding: "5px 50px",
              marginLeft: "800px"
            }}
          >
            Cancel
          </button>

          <button
            style={{
              backgroundColor: "#428fd6",
              borderRadius: "100px",
              color: "white",
              padding: "5px 50px",
              marginTop: "50px",
              marginLeft: "15px"
            }}
          >
            Save
          </button>
        </div>
      </div>
    );
  }
}

export default Form;

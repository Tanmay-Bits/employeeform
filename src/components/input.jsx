import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import classNames from "classnames";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import { createStore } from "redux";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(10),
    marginRight: theme.spacing(10),
    marginTop: theme.spacing(5),
    width: "500px"
  },
  dense: {
    marginTop: 20
  },
  menu: {
    width: 50
  }
});
const newEntry = name => event => {
  return {
    type: "newentry",
    payload: {
      [name]: event.target.value
    }
  };
};
const entries = (previousentries = [], action) => {
  if (action.type === "newentry") {
    return [...previousentries, action.payload.name];
  } else {
    return previousentries;
  }
};
const store = createStore(entries);

const mapDispatchToProps = dispatch => ({
  newEntry: () => dispatch(newEntry())
});

console.log(store.getState());
class TextBox extends Component {
  state = {
    firstname: "Robinx",
    lastname: "Banks",
    qualification: "M.E.(CSE)",
    emailid: "robinx.banks@afourteach.com",
    hobbies: "Swimming,Traveling,Fishing",
    favouritemovie: "Avengers",
    favouritefood: "South Indian Food",
    favouritebook: "Interno-by Dan Brown",
    favquote: "Without a goal,you can't score"
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="first-name"
          label="FirstName"
          className={classes.textField}
          value={this.state.firstname}
          onChange={this.handleChange("firstname")}
          variant="outlined"
          style={{ opacity: "0.5", background: "#fff" }}
        />
        <TextField
          id="last-name"
          label="LastName"
          className={classes.textField}
          value={this.state.lastname}
          onChange={this.handleChange("lastname")}
          variant="outlined"
          style={{ opacity: "0.5", background: "#fff" }}
        />
        <br />
        <TextField
          id="qualification"
          label="Qualification"
          className={classes.textField}
          value={this.state.qualification}
          onChange={this.handleChange("qualification")}
          variant="outlined"
          style={{ opacity: "0.5", background: "#fff" }}
        />
        <TextField
          id="email"
          label="Email Id"
          className={classes.textField}
          value={this.state.emailid}
          onChange={this.handleChange("emailid")}
          variant="outlined"
          style={{ opacity: "0.5", background: "#fff" }}
        />{" "}
        <TextField
          id="hobbies"
          label="Hobbies"
          className={classes.textField}
          value={this.state.hobbies}
          onChange={this.handleChange("hobbies")}
          variant="outlined"
          style={{ opacity: "0.5", background: "#fff" }}
        />
        <TextField
          id="favouritemovie"
          label="Favourite Movie"
          className={classes.textField}
          value={this.state.favouritemovie}
          onChange={this.handleChange("favouritemovie")}
          variant="outlined"
          style={{ opacity: "0.5", background: "#fff" }}
        />{" "}
        <TextField
          id="favouritefood"
          label="Favourite Food"
          className={classes.textField}
          value={this.state.favouritefood}
          onChange={this.handleChange("favouritefood")}
          variant="outlined"
          style={{ opacity: "0.5", background: "#fff" }}
        />{" "}
        <TextField
          id="favouritebook"
          label="Favourite Book"
          className={classes.textField}
          value={this.state.favouritebook}
          onChange={this.handleChange("favouritebook")}
          variant="outlined"
          style={{ opacity: "0.5", background: "#fff" }}
        />{" "}
        <TextField
          id="favouritequote"
          label="Favourite Quote"
          className={classes.textField}
          value={this.state.favquote}
          onChange={this.handleChange("favouritequote")}
          variant="outlined"
          style={{ opacity: "0.5", backgroundColor: "#fff" }}
        />
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
            onClick={newEntry}
          >
            Save
          </button>
        </div>
      </form>
    );
  }
}

export default withStyles(styles)(TextBox);

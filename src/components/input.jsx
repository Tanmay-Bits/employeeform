import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import classNames from "classnames";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";

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

  handleChange = (
    firstname,
    lastname,
    qualification,
    emailid,
    hobbies,
    favouritemovie,
    favouritefood,
    favquote
  ) => event => {
    this.setState({
      [firstname]: event.target.value,
      [lastname]: event.target.value,
      [qualification]: event.target.value,
      [emailid]: event.target.value,
      [hobbies]: event.target.value,
      [favouritemovie]: event.target.value,
      [favouritefood]: event.target.value,
      [favquote]: event.target.value
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
          onChange={this.handleChange("Qualification")}
          variant="outlined"
          style={{ opacity: "0.5", background: "#fff" }}
        />
        <TextField
          id="email"
          label="Email Id"
          className={classes.textField}
          value={this.state.emailid}
          onChange={this.handleChange("Emailid")}
          variant="outlined"
          style={{ opacity: "0.5", background: "#fff" }}
        />{" "}
        <TextField
          id="hobbies"
          label="Hobbies"
          className={classes.textField}
          value={this.state.hobbies}
          onChange={this.handleChange("Hobbies")}
          variant="outlined"
          style={{ opacity: "0.5", background: "#fff" }}
        />{" "}
        <TextField
          id="favouritemovie"
          label="Favourite Movie"
          className={classes.textField}
          value={this.state.favouritemovie}
          onChange={this.handleChange("Favourite Movie")}
          variant="outlined"
          style={{ opacity: "0.5", background: "#fff" }}
        />{" "}
        <TextField
          id="favouritefood"
          label="Favourite Food"
          className={classes.textField}
          value={this.state.favouritefood}
          onChange={this.handleChange("Favourite Food")}
          variant="outlined"
          style={{ opacity: "0.5", background: "#fff" }}
        />{" "}
        <TextField
          id="favouritebook"
          label="Favourite Book"
          className={classes.textField}
          value={this.state.favouritebook}
          onChange={this.handleChange("Favourite Book")}
          variant="outlined"
          style={{ opacity: "0.5", background: "#fff" }}
        />{" "}
        <TextField
          id="favouritequote"
          label="Favourite Quote"
          className={classes.textField}
          value={this.state.favquote}
          onChange={this.handleChange("Favourite Quote")}
          variant="outlined"
          style={{ opacity: "0.5", backgroundColor: "#fff" }}
        />
      </form>
    );
  }
}

export default withStyles(styles)(TextBox);

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./styles/AuthNavbar.css";
import MenuIcon from "@material-ui/icons/Menu";
import Grid from "@material-ui/core/Grid";
import firebase from "firebase/app";

const Navbar = () => {

  const signOutHandler = (event) => {

    event.preventDefault();
    firebase.auth().signOut().then(() => {
      // sign-out successful
      console.log("sign-out successful");
      window.location = "/";
    }).catch((error) => {
      // an error occurred
    });
  }


  return (
    <Grid container spacing={0} className="auth_navbar_container">
        <Link className="auth_navbar_logo" to="/">
          Internify
        </Link>
      <Grid
        container
        className="auth_navbar_right_items"
        justify="flex-end"
        alignItems="center"
      >
          <Link className="auth_navbar_item" to="placeHolder">
            Home
          </Link>

          <Link className="auth_navbar_item" to="placeHolder">
            Browse
          </Link>
          <Link 
          className="auth_navbar_item" 
          to="placeHolder" 
          onClick={event => {signOutHandler(event)}}>
            Sign Out
          </Link>

          <Link className="auth_navbar_item" to="placeHolder">
            Profile
          </Link>

          <Link className="auth_navbar_item" to="placeHolder">
            <MenuIcon className="auth_navbar_item"></MenuIcon>
          </Link>
      </Grid>
    </Grid>
  );
};

export default Navbar;

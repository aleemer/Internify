import React, { useState } from "react";
// import { Link } from "@reach/router";
import { ButtonWhite, GoogleLoginButton } from "../atoms/index.js";
import firebase from "firebase/app";
import "./styles/Hero.css";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import { IconButton } from "@material-ui/core";

const Hero = () => {
  var provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope("https://www.googleapis.com/auth/contacts.readonly");

  const learnMore = () => {
    console.log("learn more");
  };

  const handleGoogleLogin = () => {
    console.log("continue with google");
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        return result.user;
      })
      .catch((error) => {
        console.log(error.code);
        console.log(error.message);
        alert(error.message);
      });
  };

  const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const [password, setPassword] = React.useState({
    password: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setPassword({...password, showPassword: !password.showPassword});
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const createWEmail = (event, email, password) => {
    event.preventDefault();
    console.log("We are creating a new user, via email and password!");

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        firebase
          .auth()
          .currentUser.sendEmailVerification()
          .then(() => {
            // Email verification sent!
            // ...
            alert("Please verify email address :)");
            return;
          });
        // ...
      })
      .catch((error) => {
        console.log(error.code);
        console.log(error.message);
        alert(error.message);
      });

    setEmail("");
    setPassword("");
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;
    if (name === "fEmail") {
      setEmail(value);
    } else if (name === "fPassword") {
      setPassword(value);
    }
  };

  return (
    <div className="hero">
      <div className="hero_header_container">
        <div className="hero_header_content">
          <p className="hero_header_line1">Find better candidates</p>
          <p className="hero_header_line2">with better job postings 🥇</p>
        </div>
        <ButtonWhite className="learn_more" onClick={learnMore}>
          Learn More
        </ButtonWhite>
      </div>
      <div className="hero_form_container">
        <GoogleLoginButton onClick={handleGoogleLogin} />
        <div className="linebreak">
          <p>────────── or ──────────</p>
        </div>
        <form>
          <input
            className="hero_form_input"
            type="text"
            id="hero_email"
            name="fEmail"
            value={email}
            placeholder="Create an account with Email"
            onChange={(event) => onChangeHandler(event)}
          />
          <br></br>
          <input
            className="hero_form_input"
            type="text"
            id="hero_password"
            name="fPassword"
            value={password.password}
            placeholder="Password"
            type={password.showPassword ? "text": "password"}
            onChange={(event) => onChangeHandler(event)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                >
                  {password.showPassword? <Visibility /> : <VisibilityOff />}
                </IconButton>

              </InputAdornment>
            }
          />
          <br></br>
        </form>
        <ButtonWhite
          className="hero_form_button"
          onClick={(event) => {
            createWEmail(event, email, password.password);
          }}
        >
          Continue with Email
        </ButtonWhite>
      </div>
    </div>
  );
};

export default Hero;

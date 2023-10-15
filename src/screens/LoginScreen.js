import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginScreen.css";
import logo from "../assets/logo.png";
import SignUpScreen from "./SignUpScreen";

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);
  //const navigate = useNavigate(); // Get the navigate function

  const onClickGetStarted = () => {
    // Navigate to the signup page when "GET STARTED" button is clicked
    //navigate("/signup"); 
    setSignIn(true);
  };

  return (
    <div className="loginScreen">
      <div className="loginScreen_background">
        <img className="loginScreen_logo" src={logo} alt="/" />
        <button onClick={() => setSignIn(true)} className="loginScreen_button">
          Sign In
        </button>
        <div className="loginScreen_gradient" />
      </div>
      <div className="loginScreen_body">
        {signIn ? (
          <SignUpScreen />
        ) : (
          <>
            <h1>Unlimited Films, TV programs and more.</h1>
            <h2>Watch anywhere, Cancel at any time</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className="loginScreen_input">
              <form>
                <input type="email" placeholder="Email Address " />
                <button
                  onClick={onClickGetStarted}
                  className="loginScreen_getStarted"
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginScreen;

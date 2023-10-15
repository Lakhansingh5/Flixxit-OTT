import React, { useRef } from "react";
import "./SignupScreen.css";
import { auth } from "../firebase";
//import HomeScreen from "./HomeScreen";
import { useNavigate } from "react-router-dom";

function SignUpScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const navigate = useNavigate();

  return (
    <div className="signUpScreen">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} placeholder="Email" type="email" />
        <input
          ref={passwordRef}
          placeholder="Password"
          type="password"
          autoComplete="off"
        />
        <button type="submit" onClick={(signIn) => navigate("/homescreen")}>
          Sign In
        </button>
        <h4>
          <span className="signUpScreen_gray">New to Flixxit ? </span>
          <span className="signUpScreen_link" onClick={register}>
            Sign Up Now.{" "}
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignUpScreen;

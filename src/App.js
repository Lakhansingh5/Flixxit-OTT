import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";

import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import PofileScreen from "./screens/PofileScreen";
import Banner from "./Banner";
import Player from "./screens/Player";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="app">
      <Router>
        {!selectUser ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route path="/signup" element={<SignUpScreen />} />
            <Route exact path="/" element={<LoginScreen />} />
            <Route  path="/homescreen" element={<HomeScreen />} />
            <Route path="player" element={<Player />} />

            <Route path="/profile" element={<PofileScreen />} />
            <Route exact path="/banner" element={<Banner />} />

          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;

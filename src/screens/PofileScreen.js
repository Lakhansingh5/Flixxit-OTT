import React from "react";
import "./PofileScreen.css";
import Nav from "../Nav";
import nav_avatar from "../assets/nav_avatar.png";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";
import { useNavigate} from "react-router-dom";

function PofileScreen() {
  const user = useSelector(selectUser);
  const navigate = useNavigate();


  return (
    <div className="pofileScreen">
      <Nav />
      <div className="profileScreen_body">
        <h1>Sign Out Profile</h1>
        <div className="profileScreen_info">
          <img src={nav_avatar} alt="/" />
          <div className="profileScreen_details">
            <h2>{selectUser.email}</h2>
            <div className="profileScreen_plans">
            <button 
            className="profileScreen_signOut"
            type="submit" onClick={(signOut) => navigate("/")}>

                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PofileScreen;

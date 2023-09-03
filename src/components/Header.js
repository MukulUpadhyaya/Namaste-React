import { LOGO_URL } from "../utils/constants";
import { useState, useEffect} from "react";
const Header = () => {
  const [btnName, setbtnName] = useState("LogIn");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
     
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
        <button
        onClick={()=>{
          if(btnName!=="Logout")
          setbtnName("Logout")
        else
        setbtnName("Login")}}>{btnName}</button>
      </div>
    </div>
  );
};

export default Header;

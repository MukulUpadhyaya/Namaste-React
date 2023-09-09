import { LOGO_URL } from "../utils/constants";
import { useState, useEffect} from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [btnName, setbtnName] = useState("LogIn");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
     
      <div className="nav-items">
        <ul>
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/about"}>About Us</Link></li>
          <li><Link to={"/contact"}>Contact Us</Link></li>
          <li><Link>Cart</Link></li>
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

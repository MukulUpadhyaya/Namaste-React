import { LOGO_URL } from "../utils/constants";
import { useState} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setbtnName] = useState("LogIn");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between bg-orange-200 shadow-md">
      <div className="logo-container">
        <img className="object-contain h-48 w-full" src={LOGO_URL} />
      </div>
     
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4 text-2xl">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4 text-2xl"><Link to={"/"}>Home</Link></li>
          <li className="px-4 text-2xl"><Link to={"/about"}>About Us</Link></li>
          <li className="px-4 text-2xl"><Link to={"/contact"}>Contact Us</Link></li>
          <li className="px-4 text-2xl"><Link>Cart</Link></li>
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

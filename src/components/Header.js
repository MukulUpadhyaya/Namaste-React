import { LOGO_URL } from "../utils/constants";
import { useContext, useState} from "react";
import { Link } from "react-router-dom";
import {FaShoppingCart} from 'react-icons/fa'
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import {useSelector} from "react-redux"

const Header = () => {
  const {loggedInUser} = useContext(UserContext);
  const [btnName, setbtnName] = useState("LogIn");
  const onlineStatus = useOnlineStatus();

  //Subsribing to the store using selector
  const cartItems = useSelector((store)=> store.cart.items);
  return (
    <div className="flex justify-between bg-orange-200 shadow-md">
      <div className="logo-container">
        <img className="object-contain w-32 h-32" src={LOGO_URL} />
      </div>
     
      <div className="flex items-center ">
        <ul className="flex p-4 m-4">
          <li className="px-4 font-bold text-xl">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4 font-bold text-xl"><Link to={"/"}>Home</Link></li>
          <li className="px-4 font-bold text-xl"><Link to={"/about"}>About Us</Link></li>
          <li className="px-4 font-bold text-xl"><Link to={"/contact"}>Contact Us</Link></li>
          <li className="px-4 font-bold text-xl"><Link className="flex items-center" to={"/cart"}><FaShoppingCart className="mx-2 text-2xl"/>{cartItems.length>0?cartItems.length:""}</Link></li>
          <li><button className="px-4 font-bold text-xl"
        onClick={()=>{
          if(btnName!=="Logout")
          setbtnName("Logout")
        else
        setbtnName("Login")}}>{btnName}</button></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

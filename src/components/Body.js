import RestaurantCard from "./RestaurantCard";
import { useState, useEffect, useContext} from "react";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

const Body = () => {
  // Local State Variable - Super powerful variable
  const [listOfRestaurants, setListOfRestraunt] = useState("");
  const [filtedredRestaurants, setfiltedredRestaurants] = useState(""); 
  const [searchText, setsearchText] = useState("");
  

  useEffect(()=>{
    fetchData();
  }, []);

  const fetchData = async () =>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.9844618&lng=77.7064137&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    console.log("Hello")

    const json = await data.json();
    setListOfRestraunt(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setfiltedredRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

  } 
  const {loggedInUser, setUserName} = useContext(UserContext);
  return (listOfRestaurants?.length===0)?(<Shimmer></Shimmer>)
  :
   (
    <div className="body">
      <div className="flex-none items-center ">
      <div className="search m-4 p-4">
      <input data-testid="searchInput" type="text" className="text-center border border-solid border-black xl:border-black rounded-lg w-5/6" value={searchText} placeholder="Search for Restaurants and food"
      onChange={(e)=>{
        const currentSearch = e.currentTarget.value.toLowerCase();
        setsearchText(currentSearch)
      }}></input>
      <button className="px-4 py-2 bg-blue-100 hover:bg-blue-300 m-4 rounded-lg" onClick={() => {
        console.log(searchText);
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.name.toLowerCase().includes(searchText)
            );
            setfiltedredRestaurants(filteredList);
            
          }}>search</button>
    <input
            className="border border-black p-2"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
      </div>
        <button
          className="px-4 py-0 h-10 bg-gray-100 m-4 rounded-lg hover:bg-gray-300"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.2
            );
            setfiltedredRestaurants(filteredList);
            
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="flex flex-wrap">
      {/* {console.log(listOfRestaurants)} */}
        {filtedredRestaurants?.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/restaurants/"+ restaurant.info.id}><RestaurantCard key={restaurant.info.id} resData={restaurant} /></Link>
        ))
        }
      </div>
    </div>
  );
};

export default Body;

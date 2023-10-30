import RestaurantCard from "./RestaurantCard";
import { useState, useEffect, useContext} from "react";
import { ShimmerForRes } from "./Shimmer";
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
  return (listOfRestaurants?.length===0)?(<ShimmerForRes/>)
  :
   (
    <div className="body">
      <div className="flex-none items-center ">
      <div className=" flex search m-4 p-4 items-center">
      <input data-testid="searchInput" type="text" className="block w-9/12 h-14 p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg outline-none shadow-md focus:outline" value={searchText}  placeholder="Search for Restaurants and food"
      onChange={(e)=>{
        const currentSearch = e.currentTarget.value.toLowerCase();
        setsearchText(currentSearch)
        const filteredList = listOfRestaurants.filter(
          (res) => res.info.name.toLowerCase().includes(currentSearch)
        );
        setfiltedredRestaurants(filteredList);
      }}></input>
      <button className="px-4 py-2 w-2/12 h-14 text-xl bg-blue-100 hover:bg-blue-300 m-4 rounded-lg" onClick={() => {
        console.log(searchText);
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.name.toLowerCase().includes(searchText)
            );
            setfiltedredRestaurants(filteredList);
            
          }}>search</button>
    {/* <input
            className="border border-black p-2"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          /> */}
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

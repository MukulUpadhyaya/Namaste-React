import RestaurantCard from "./RestaurantCard";
import { useState, useEffect} from "react";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  // Local State Variable - Super powerful variable
  const [listOfRestaurants, setListOfRestraunt] = useState("");
  const [filtedredRestaurants, setfiltedredRestaurants] = useState(""); 
  const [searchText, setsearchText] = useState("");

  useEffect(()=>{
    fetchData();
  }, []);

  const fetchData = async () =>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6049178&lng=77.3489877&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTINGs");
    console.log("Hello")

    const json = await data.json();
    setListOfRestraunt(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setfiltedredRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

  } 
  
  return (listOfRestaurants?.length===0)?(<Shimmer></Shimmer>)
  :
   (
    <div className="body">
      <div className="filter">
      <div className="search">
      <input type="text" className="searchTerm" value={searchText} placeholder="Search for Restaurants and food"
      onChange={(e)=>{
        const currentSearch = e.currentTarget.value.toLowerCase();
        setsearchText(currentSearch)
      }}></input>
      <button onClick={() => {
        console.log(searchText);
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.name.toLowerCase().includes(searchText)
            );
            setfiltedredRestaurants(filteredList);
            
          }}>search</button>
      </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.2
            );
            setListOfRestraunt(filteredList);
            
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        
        {filtedredRestaurants?.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/restaurants/"+ restaurant.info.id}><RestaurantCard key={restaurant.info.id} resData={restaurant} /></Link>
        ))
        }
      </div>
    </div>
  );
};

export default Body;

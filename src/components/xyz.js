import RestaurantCard from "./RestaurantCard";
import ShimmerUI from "./ShimmerUI";
import { filterData } from "../utils/helper";
import useAllRest from "../utils/hooks/useAllRest";
import { useEffect, useState } from "react";
import CrossIcon from "../assets/icons/IconsComponents/CrossIcon";
import useFilterRest from "../utils/hooks/useFilterRest";
import { useDispatch, useSelector } from "react-redux";
import SearchArea from "./SearchArea";
import AddressSidebar from "./AddressSidebar";
import foodDesktop from "../assets/bg/foodDesktop.webp";
import foodMobile from "../assets/bg/foodMobile.webp";
import locationUnserviceableImg from "../assets/bg/location_unserviceable.webp";
import { openAddressSidebar } from "../utils/store/appSlice";
import { taglines } from "../utils/constants";
import { title } from "process";
const Body = () => {
  const [searchText, setSearchText] = useState("");
  const placeId = useSelector((store) => store.app.place_id);
  const addressSidebar = useSelector((store) => store.app.addressSidebar);
  const [taglineIndex, setTaglineIndex] = useState(0);
  const dispatch = useDispatch();
  const [allRestaurants, filteredRestaurants, setFilteredRestaurants] =
    useAllRest();
  const [
    topRated,
    setTopRated,
    offers,
    setOffers,
    pureVeg,
    setPureVeg,
    below300,
    setBelow300,
    range300_600,
    setRange300_600,
  ] = useFilterRest(
    allRestaurants,
    filteredRestaurants,
    setFilteredRestaurants
  );
  // console.log(allRestaurants);
  useEffect(() => {
    const theTimer = setInterval(() => {
      if (taglineIndex === 5) {
        setTaglineIndex(0);
      } else {
        // setTaglineIndex((prevIndex)=>prevIndex+1);
        setTaglineIndex(taglineIndex + 1);
      }
    }, 3500);
    return () => {
      clearInterval(theTimer);
    };
  }, [taglineIndex]);

  return (
    <>
      <div className="body" style={placeId ? {} : { width: "100%" }}>
        {placeId ? (
          allRestaurants?.length !== 0 ? (
            allRestaurants?.title === "Location Unserviceable" ? (
              <div className="emptyCartContainer" data-testid="empty-cart">
                <div className="cookingImg">
                  <img src={locationUnserviceableImg} alt="Empty Cart" />
                </div>
                <h3>Location Unserviceable</h3>
                <p>We don’t have any services here till now.</p>
                <div
                  onClick={() => dispatch(openAddressSidebar())}
                  className="seeAllRestBtn"
                >
                  Try changing location
                </div>
              </div>
            ) : (
              <div className="restaurantsList">
                <div className="searchBar" data-testid="searchBar">
                  <input
                    type="text"
                    data-testid="search-input"
                    placeholder="search for the restaurant..."
                    value={searchText}
                    onChange={(e) => {
                      setSearchText(e.target.value);
                      const filteredData = filterData(
                        e.target.value,
                        allRestaurants
                      );
                      setFilteredRestaurants(filteredData);
                    }}
                  />
                  <div className="filterContainer custom-scroll">
                    <div
                      className="filters"
                      style={
                        topRated
                          ? {
                              backgroundColor: "rgba(2, 6, 12, 0.15)",
                              border: "1px solid rgb(54, 57, 62)",
                            }
                          : {}
                      }
                      onClick={() => {
                        setTopRated(!topRated);
                      }}
                    >
                      Ratings 4.0+ {topRated ? <CrossIcon /> : ""}
                    </div>
                    <div
                      className="filters"
                      style={
                        pureVeg
                          ? {
                              backgroundColor: "rgba(2, 6, 12, 0.15)",
                              border: "1px solid rgb(54, 57, 62)",
                            }
                          : {}
                      }
                      onClick={() => {
                        setPureVeg(!pureVeg);
                      }}
                    >
                      Pure Veg {pureVeg ? <CrossIcon /> : ""}
                    </div>
                    <div
                      className="filters"
                      style={
                        offers
                          ? {
                              backgroundColor: "rgba(2, 6, 12, 0.15)",
                              border: "1px solid rgb(54, 57, 62)",
                            }
                          : {}
                      }
                      onClick={() => {
                        setOffers(!offers);
                      }}
                    >
                      Offers {offers ? <CrossIcon /> : ""}
                    </div>
                    {below300 ? (
                      ""
                    ) : (
                      <div
                        className="filters"
                        style={
                          range300_600
                            ? {
                                backgroundColor: "rgba(2, 6, 12, 0.15)",
                                border: "1px solid rgb(54, 57, 62)",
                              }
                            : {}
                        }
                        onClick={() => {
                          setRange300_600(!range300_600);
                        }}
                      >
                        Rs.300-Rs.600 {range300_600 ? <CrossIcon /> : ""}
                      </div>
                    )}

                    {range300_600 ? (
                      ""
                    ) : (
                      <div
                        className="filters"
                        style={
                          below300
                            ? {
                                backgroundColor: "rgba(2, 6, 12, 0.15)",
                                border: "1px solid rgb(54, 57, 62)",
                              }
                            : {}
                        }
                        onClick={() => {
                          setBelow300(!below300);
                        }}
                      >
                        Less than Rs.300{below300 ? <CrossIcon /> : ""}
                      </div>
                    )}
                  </div>
                </div>
                <div className="restaurants" data-testid="restaurants">
                  {filteredRestaurants?.length !== 0 ? (
                    filteredRestaurants?.map((restaurant) => {
                      return (
                        <RestaurantCard
                          {...restaurant?.info}
                          key={restaurant?.info?.id}
                        />
                      );
                    })
                  ) : (
                    <div className="NoResultMsg">
                      <h1>No result found.</h1>
                    </div>
                  )}
                </div>
              </div>
            )
          ) : (
            <div className="restaurants" data-testid="rest-shimmer">
              {Array(12)
                .fill(1)
                .map((elem, index) => (
                  <ShimmerUI key={index} />
                ))}
            </div>
          )
        ) : (
          <>
            <div className="displayNoneAtLarge">
              <div className="searchAreaContainer">
                <div className="rightSearchArea">
                  <img src={foodMobile} alt="" />
                </div>
                <div className="leftSearchArea">
                  <h1 className="tagline">{taglines[taglineIndex]}</h1>
                  <h2 className="restNearYou">
                    Order food from favourite restaurants near you.
                  </h2>
                  <div
                    onClick={() => dispatch(openAddressSidebar())}
                    className="seeAllRestBtn"
                  >
                    setup your location
                  </div>
                </div>
              </div>
            </div>
            <div className="displayNoneAtPhone">
              <div className="searchAreaContainer ">
                <div className="leftSearchArea">
                  <h1 className="tagline">{taglines[taglineIndex]}</h1>
                  <h2 className="restNearYou">
                    Order food from favourite restaurants near you.
                  </h2>
                  <div
                    className=""
                    style={{ width: "75%", margin: "1.25rem auto" }}
                  >
                    <SearchArea />
                  </div>
                </div>
                <div className="rightSearchArea">
                  <img src={foodDesktop} alt="" />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Body;

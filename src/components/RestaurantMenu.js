import { Shimmer } from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

export const RestaurantMenu = () => {

    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);
    const [showIndex, setShowItems] = useState(null);

 if (resInfo === null) return <Shimmer />;

    const { name, cuisines, costForTwoMessage } =
      resInfo?.cards[0]?.card?.card?.info;
  
    const { itemCards } =
      resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
      const ResCard = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
      //console.log(ResCard);
      const categories = ResCard.filter((c)=>
        c?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
      console.log(categories);
    return(
        <div className="text-center p-4 rounded-lg">
            <h1 className="font-sans font-bold py-4">{name}</h1>
            <p className="font-sans font-bold">
                {cuisines.join(", ")} - {costForTwoMessage}
            </p>
            <h2 className="font-sans font-bold py-4">Menu</h2>
            <ul>
                {categories.map((item, index) => (
                    <RestaurantCategory 
                    key={index}
                    data={item?.card?.card}
                    showItems={index === showIndex ? true : false}
                    setShowItems={() => setShowItems(index)}></RestaurantCategory>
                    //<h1>{item?.card?.card?.["title"]}</h1>
                ))}
            </ul>
        </div>
    )
};

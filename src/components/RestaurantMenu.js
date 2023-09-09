import { useEffect, useState } from "react";
import { Shimmer } from "./Shimmer";
import { MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";

export const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);
    const {resId} = useParams();
    console.log(resId);
    useEffect(()=>{
        fetchMenu();
      }, []);

    const fetchMenu = async () => {
        const data = await fetch(MENU_API+resId);
        const JSON = await data.json();
        console.log(JSON);
        setResInfo(JSON.data);
    }

 if (resInfo === null) return <Shimmer />;

    const { name, cuisines, costForTwoMessage } =
      resInfo?.cards[0]?.card?.card?.info;
  
    const { itemCards } =
      resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    return(
        <div className="RestaurantMenu">
            <h1>{name}</h1>
            <p>
                {cuisines.join(", ")} - {costForTwoMessage}
            </p>
            <h2>Menu</h2>
            <ul>
                {itemCards.map((item) => (
                <li key={item.card.info.id}>
                    {item.card.info.name} -{" Rs."}
                    {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
                </li>
                ))}
            </ul>
        </div>
    )
};

import { Shimmer } from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

export const RestaurantMenu = () => {

    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);

 if (resInfo === null) return <Shimmer />;

    const { name, cuisines, costForTwoMessage } =
      resInfo?.cards[0]?.card?.card?.info;
  
    const { itemCards } =
      resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    return(
        <div className="m-4 p-4 w-[480px] rounded-lg bg-gray-100 hover:bg-gray-200">
            <h1 className="font-sans font-bold py-4">{name}</h1>
            <p className="font-sans font-bold">
                {cuisines.join(", ")} - {costForTwoMessage}
            </p>
            <h2 className="font-sans font-bold py-4">Menu</h2>
            <ul>
                {itemCards.map((item) => (
                <li  key={item.card.info.id}>
                    {item.card.info.name} -{" Rs."}
                    {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
                </li>
                ))}
            </ul>
        </div>
    )
};

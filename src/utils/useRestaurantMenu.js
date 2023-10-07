import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);
    useEffect(()=>{
        fetchMenu();
      }, []);

    const fetchMenu = async () => {
        const data = await fetch(MENU_API+resId);
        const JSON = await data.json();
        //console.log(JSON);
        setResInfo(JSON.data);
    }
    return resInfo;
}
export default useRestaurantMenu;
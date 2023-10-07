// import { CDN_URL } from "../utils/constants";

const ItemList = (items) => {
    console.log(items);
    const CDN_URL =   "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";
    return (
        <div>
            {items.data.map((item)=>(
                <div key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 flex text-left">
                <div className="w-9/12">
                    <div className="py-2">
                    <span>{item.card.info.name}</span>
                    <span> - ₹ {item.card.info.price? Math.ceil(item.card.info.price/100): Math.ceil(item.card.info.defaultPrice/100)}</span>
                    </div>
                    <p className="text-xs">{item.card.info.description}</p>
                </div>{item.card.info.imageId &&
                    <div className="w-3/12">
                    <div className="absolute">
                     <button className="px-2 py-1 mx-21 my-12 bg-black text-white rounded-md">Add</button>
                     </div>
                     <img src={CDN_URL+item.card.info.imageId} />
                     
                    </div>
}
                </div>
            ))} 
        </div>
    )
}
export default ItemList;
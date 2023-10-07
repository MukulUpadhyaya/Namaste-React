
import ItemList from './ItemList'

const RestaurantCategory = ({data, showItems, setShowItems}) => {
    
    const handleClick = () =>{
        setShowItems();
    };
    return(
        <div>
            <div onClick={handleClick} className="cursor-pointer w-6/12 mx-auto my-5 bg-gray-50 rounded-sm shadow-lg p-4 ">
                {/* Header */}
                <div className='flex justify-between'>
                    <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
                    <span>⬇️</span>
                </div>
            {showItems && <ItemList data={data.itemCards}></ItemList>}
            </div>
        </div>
    )
}
export default RestaurantCategory;
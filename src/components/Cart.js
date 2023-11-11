import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  console.log(cartItems);

  const dispatch = useDispatch();
  const getCartTotal = () => {
    let sum = 0;
    cartItems.forEach((each) => {
      sum += each?.card?.info?.price;
    });
    return parseInt(sum / 100);
  };

  if (cartItems.length == 0) {
    return (
      <h1 className="my-20 font-bold text-center p-8 text-3xl text-slate-700">
        Cart is empty! Go to homepage add some items to your cart.
      </h1>
    );
  }

  const clearCartHandler = () => {
    return dispatch(clearCart());
  };

  return (
    <div className="flex-row">
      <div className="text-center m-4 p-4">
        <h1 className="text-2xl font-bold">Cart</h1>
        <div className="w-6/12 m-auto">
          
          {cartItems?.length === 0 && (
            <h1> Cart is empty. Add Items to the cart!</h1>
          )}
          {cartItems.length !== 0 ? <ItemList data={cartItems} /> : null}
        </div>
      </div>

      <div className="right-part w-3/12 mx-auto">
        <div className="border-orange-300 border-4 rounded-xl cartDetails flex flex-col justify-center items-center py-4">
          <p className="p-2 font-bold text-lg">{`Total Items : ${cartItems?.length}`}</p>
          <p className="p-2 font-bold text-lg">{`Cart Total : ${getCartTotal()} rs`}</p>
          <button
            className="bg-orange-300 p-4 mt-3 font-bold rounded w-[90%] mx-auto"
            onClick={() => clearCartHandler()}
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

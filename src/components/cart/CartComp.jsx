import React from "react";
import { removeFromCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";
const CartComp = ({ cart }) => {
  const dispatch=useDispatch()
  return (
    <div className="my-10 flex items-center justify-between">
      <img
        className="w-[150px] h-[150px] object-cover"
        src={cart?.image}
        alt={cart?.title}
      />
      <div className="w-[75vh]">
        <div className="text-xl font-bold">{cart?.title}</div>
        <div>{cart?.description}</div>
      </div>
    
        <div className="text-2xl font-bold">{cart?.price} TL ({cart?.quantity})</div>
        <div onClick={()=>dispatch(removeFromCart(cart?.id))} className="bg-red-500 text-white text-2xl w-[150px] h-16 rounded-md cursor-pointer flex items-center justify-center">Ürünü Sil</div>
      </div>
   
  );
};

export default CartComp;

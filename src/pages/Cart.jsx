import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../redux/cartSlice";
import CartComp from "../components/cart/CartComp";

const Cart = () => {
  const dispatch = useDispatch();
 

  const { carts, totalAmount, itemCount } = useSelector((state) => state.carts);
 console.log(carts,totalAmount,itemCount,"carts")
  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);
  return (
    <div>
      {carts?.length > 0 ?<div>
        {
          carts?.map((cart,i)=>(<CartComp key={i} cart={cart}/>))
      }
      <div className="text-2xl font-bold flex items-center justify-end">Toplam Tutar : <span className="font-bold text-3xl ml-5"> {totalAmount} </span>  TL</div>
      </div>
     : 
        <div>
          <h1>Sepetinizde Ürün Bulunmamaktadır.</h1>
        </div>
      }
    </div>
  );
};

export default Cart;

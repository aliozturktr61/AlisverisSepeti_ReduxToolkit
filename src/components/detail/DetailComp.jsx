import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
const DetailComp = ({ productDetail }) => {
  const dispatch=useDispatch()
  const [quantity, setQuantity] = useState(0);
  const increment = () => {
    if (quantity < productDetail?.rating?.count) setQuantity(quantity + 1)
  }
  const decrement = () => {
    if (quantity > 0) setQuantity(quantity - 1)
    };
  const addBasket = () => {
    dispatch(addToCart({id:productDetail?.id,
      title:productDetail?.title,
      price:productDetail?.price,
      image:productDetail?.image,
      quantity:quantity}))
  }
  return (
    <div className="flex gap-10 my-10">
      <img
        className="w-[700px] h-[700px] object-cover"
        src={productDetail?.image}
        alt={productDetail?.title}
      />
      <div>
        <div className="text-3xl font-bold">{productDetail?.title}</div>
        <div className="my-2 text-2xl">{productDetail?.description}</div>
        <div className="my-2 text-xl text-red-500">
          Rating:{productDetail?.rating?.rate}
        </div>
        <div className="my-2 text-xl text-red-500">
          Count:{productDetail?.rating?.count}
        </div>
        <div className="text-5xl font-bold">
          {productDetail?.price}
          <span className="text-sm">TL</span>
        </div>
        <div className="flex gap-5 items-center my-4">
          <div onClick={decrement} className="text-4xl cursor-pointer">-</div>
          <input className="w-20 text-center text-3xl font-bold"  type="text" value={quantity} />
          <div onClick={increment} className="text-3xl cursor-pointer">+</div>
        </div>
        <div onClick={addBasket} className="border w-[200px] my-4 text-2xl rounded-md bg-gray-200 cursor-pointer  h-16 flex justify-center items-center">
          Sepete Ekle
        </div>
      </div>
    </div>
  );
};

export default DetailComp;

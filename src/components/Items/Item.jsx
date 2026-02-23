import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavouriteItem } from "./ItemSlice";

const Item = ({
  id,
  title,
  description,
  currentBidPrice,
  timeLeft,
  bidsCount,
  image,
}) => {
  const favouriteItem = useSelector((state) => state.ItemReducer.favouriteItem);
  const isFavourite = favouriteItem.some((item) => item.id === id);
  const dispatch = useDispatch();
  return (
    <tr>
      <td>
        <div className="flex gap-2">
          <img className="w-24 h-24 object-cover" src={image} alt={title} />
          <p className=" text-[18px] ">{title}</p>
        </div>
      </td>
      <td>
        $
        {currentBidPrice.toString().slice(0, 1) +
          "," +
          currentBidPrice.toString().slice(1)}
      </td>
      <td>{timeLeft} days left</td>
      <td>
        <button
          disabled={isFavourite ? true : false}
          onClick={() => {
            dispatch(addFavouriteItem({ id, currentBidPrice }));
          }}
        >
          <i
            className={
              isFavourite
                ? "fi fi-rr-heart text-[20px] cursor-pointer text-red-400"
                : "fi fi-rr-heart text-[20px] cursor-pointer"
            }
          ></i>
        </button>
      </td>
    </tr>
  );
};

export default Item;

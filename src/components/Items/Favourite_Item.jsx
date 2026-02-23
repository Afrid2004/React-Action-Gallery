import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFavouriteItem } from "./ItemSlice";

const Favourite_Item = () => {
  const { favouriteItem, totalBidAmount } = useSelector(
    (state) => state.ItemReducer,
  );
  const dispatch = useDispatch();

  const items = favouriteItem.map((item, index) => {
    return (
      <div key={index}>
        <div className="flex gap-2 bg-[#ebf0f5] mb-2 p-2 rounded-[10px]">
          <img
            className="w-24 h-24 object-cover rounded-[10px]"
            src={item.image}
            alt={item.title}
          />
          <div>
            <p className=" text-[16px] ">{item.title}</p>
            <div className="flex gap-4 items-center">
              <span>
                $
                {item.currentBidPrice.toString().slice(0, 1) +
                  "," +
                  item.currentBidPrice.toString().slice(1)}
              </span>
              <span>Bids: {item.bidsCount}</span>
            </div>
          </div>
          <div>
            <img
              onClick={() =>
                dispatch(
                  removeFavouriteItem({
                    id: item.id,
                    currentBidPrice: item.currentBidPrice,
                  }),
                )
              }
              src="images/cross.png"
              alt="cross"
              className="w-[24px] h-[24px] object-cover"
            />
          </div>
        </div>
      </div>
    );
  });
  const noMsg = (
    <div className="py-4 px-3">
      <p className="text-center text-[26px] mb-2">No favorites yet</p>
      <p className="text-center">
        Click the heart icon on any item to add it to your favorites
      </p>
    </div>
  );
  return (
    <div className="bg-white p-4 rounded-[8px] sticky top-20">
      <div>
        <div className="flex items-center gap-2 justify-center border-b border-b-blue-100 pb-2 ">
          <i className="fi fi-rr-heart text-[20px] flex cursor-pointer"></i>
          <h4>Favorite Items</h4>
        </div>
        <div className="py-4 max-h-[270px] overflow-y-auto">
          {favouriteItem.length == 0 ? noMsg : items}
        </div>
        <div className="flex justify-between items-center border-t border-t-blue-100 pt-2 ">
          <p>Total bids Amount</p>
          <span>${totalBidAmount}</span>
        </div>
      </div>
    </div>
  );
};

export default Favourite_Item;

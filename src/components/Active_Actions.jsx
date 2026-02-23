import React from "react";
import { Provider } from "react-redux";
import { Store } from "./Items/Store";
import ItemView from "./Items/ItemView";
import Favourite_Item from "./Items/Favourite_Item";

const Active_Actions = () => {
  return (
    <div className="bg-[#ebf0f5] py-20">
      <div className="max-w-[1200px] h-full flex flex-col mx-auto">
        <div>
          <h4 className="mb-2 text-3xl font-medium">Active Auctions</h4>
          <p className="mb-3">Discover and bid on extraordinary items</p>
        </div>
        <div className="flex gap-3 w-full flex-wrap">
          <div className="lg:w-[70%]">
            <div>
              <Provider store={Store}>
                <ItemView />
              </Provider>
            </div>
          </div>
          <div className="lg:w-[30%]">
            <Provider store={Store}>
              <Favourite_Item />
            </Provider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Active_Actions;

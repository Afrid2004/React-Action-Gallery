import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./ItemSlice";
import Item from "./Item";

const ItemView = () => {
  const items = useSelector((state) => state.ItemReducer.dataItem);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <>
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
        <table className="table">
          <thead>
            <tr>
              <td>Items</td>
              <td>Current Bid</td>
              <td>Time Left</td>
              <td>Bid Now</td>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => {
              return <Item key={item.id} {...item} />;
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ItemView;

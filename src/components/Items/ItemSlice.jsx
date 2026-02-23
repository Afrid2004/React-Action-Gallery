import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk("items/fetchData", async() => {
  const response = await fetch("/data.json");
  const data = await response.json();
  return data;
});

const ItemSlice = createSlice({
  name : "items",
  initialState : {
    dataItem : [],
    favouriteItem : [],
    totalBidAmount : 0
  },
  reducers: {
    addFavouriteItem : (state, action) => {
      const item = [...state.dataItem].find(item => item.id == action.payload.id);
      
      if(item) {
        const exists = state.favouriteItem.find(fav => fav.id === item.id);
        if(!exists) {
          state.favouriteItem.push(item); 
          state.totalBidAmount = state.totalBidAmount + action.payload.currentBidPrice;
        }
      }
    },
    removeFavouriteItem : (state, action) => {
      const filteredFavourite = [...state.favouriteItem].filter((item) => {
        return item.id !== action.payload.id;
      });
      state.favouriteItem = filteredFavourite;
      state.totalBidAmount = state.totalBidAmount - action.payload.currentBidPrice;
    }
  },
  extraReducers : (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.dataItem = [];
    }),
    builder.addCase(fetchData.fulfilled, (state , action) => {
      state.dataItem = action.payload;
    }),
    builder.addCase(fetchData.rejected, (state) => {
      state.dataItem = [];
    })
  }
});

export const {addFavouriteItem, removeFavouriteItem} = ItemSlice.actions;
export default ItemSlice.reducer;
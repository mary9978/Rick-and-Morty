import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favoriteItem:[],
    favoriteTotalQuantity:0
}
export const favoriteSlice = createSlice({
    name:'favoriteItem',
    initialState,
    reducers:{
      addToFavorite:(state,action)=>{
          state.favoriteItem.push(action.payload);
          state.favoriteTotalQuantity += 1;
      },
      removeFavorite:(state,action)=>{
         const index =  state.favoriteItem.findIndex(item => item.id === action.payload);
           state.favoriteItem.pop(index);
          state.favoriteTotalQuantity -= 1;
     }
    }
});

export  const {addToFavorite,removeFavorite} = favoriteSlice.actions;
export  default favoriteSlice.reducer;
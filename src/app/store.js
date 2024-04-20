import { configureStore } from "@reduxjs/toolkit";
import favoriteSlice from '../features/favorites/favoriteSlice.js';
import {characterSlice} from "../features/ characters/characterSlice.js";
export  const store = configureStore({
    reducer:{
       favorite:favoriteSlice,
        character : characterSlice
    }
})
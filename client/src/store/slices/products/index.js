import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  author: {},
  categories: [],
  items: [],
  item: [],
};

export const productsInformationReducer = createSlice({
  name: "products",
  initialState,
  reducers: {
    setAuthor: (state, { payload }) => {
      state.author = payload;
    },
    setCategories: (state, { payload }) => {
      state.categories = payload;
    },
    setItems: (state, { payload }) => {
      state.items = payload;
    },
    setItem: (state, { payload }) => {
      state.item = payload;
    },
    resetInfo: (state) => {
      state.author = {};
      state.categories = [];
      state.items = [];
      state.items = [];
    },
  },
});

export const { setAuthor, setCategories, setItems, setItem, resetInfo } =
  productsInformationReducer.actions;

export const selectAuthor = (state) =>
  state.products.author ? state.products.author : {};
export const selectCategories = (state) =>
  state.products.categories ? state.products.categories : [];
export const selectItems = (state) =>
  state.products.items ? state.products.items : [];
export const selectItem = (state) =>
  state.products.item ? state.products.item : [];

export default productsInformationReducer.reducer;

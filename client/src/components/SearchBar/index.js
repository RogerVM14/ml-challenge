import React, { useState } from "react";
import Search from "./Search";
import mlLogo from "../../assets/logo/logo_ml.png";
import searchIcon from "../../assets/icons/search_2x.png";
import { getProductsByQuery } from "../../api/mlApi";
import { useDispatch } from "react-redux";
import {
  setAuthor,
  setCategories,
  setItems,
} from "../../store/slices/products";
import { useNavigate } from "react-router-dom";
const SearchBar = () => {
  const [searchInformation, setSearchInformation] = useState("");
  //Hooks
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearchProduct = async (e) => {
    e.preventDefault();
    await getProductsByQuery(searchInformation).then((res) => {
      const { data } = res;
      dispatch(setAuthor(data.author));
      dispatch(setCategories(data.categories));
      dispatch(setItems(data.items));
      navigate("/items", { state: { search: searchInformation } });
    });
  };

  
  return (
    <Search
      mLogo={mlLogo}
      handleClickGetProducts={handleSearchProduct}
      setSearchInfo={setSearchInformation}
      searchInfo={searchInformation}
      searchIcon={searchIcon}
    />
  );
};

export default SearchBar;

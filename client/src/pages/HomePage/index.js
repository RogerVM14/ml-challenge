import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import SearchBar from "../../components/SearchBar";
import { resetInfo } from "../../store/slices/products";
const HomePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetInfo());
  }, [dispatch]);
  return <SearchBar />;
};

export default HomePage;

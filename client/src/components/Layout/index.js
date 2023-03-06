import React from "react";
import { useSelector } from "react-redux";
import { selectCategories } from "../../store/slices/products";
import BreadcrumbCategories from "../BreadcrumbCategories";
import SearchBar from "../SearchBar";

const Layout = ({ children }) => {
  const categories = useSelector(selectCategories);
  return (
    <>
      <SearchBar />
      <BreadcrumbCategories list={categories} />
      {children}
    </>
  );
};

export default Layout;

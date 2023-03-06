import React from "react";
import { Link } from "react-router-dom";
import "./search.css";
const Search = (props) => {
  const {
    mLogo,
    handleClickGetProducts,
    setSearchInfo,
    searchInfo,
    searchIcon,
  } = props;
  return (
    <div className="container">
      <div className="wrapper">
        <Link className="logo" to="/">
          <img src={mLogo} alt="mlLogo" />{" "}
        </Link>
        <form onSubmit={handleClickGetProducts} className="search_form">
          <input
            className="wrapper_input"
            type="text"
            placeholder="Nunca dejes de buscar"
            onChange={(e) => setSearchInfo(e.target.value)}
            value={searchInfo}
          />
          <button type="submit" className="form_submit_button">
            <img src={searchIcon} alt="searchLogo" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;

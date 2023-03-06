import React from "react";
import "./breadcrumbCategories.css";

const BreadcrumbCategories = ({ list }) => {
  return (
    <div className="breadcrumbMainContainer">
      {list.map((el, i, arr) => {
        if (arr.length - 1 === i) {
          return <span key={i}> {el} </span>;
        }
        return <span key={i} > {el} &gt; </span>;
      })}
    </div>
  );
};

export default BreadcrumbCategories;

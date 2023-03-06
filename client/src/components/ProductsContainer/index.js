import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../ProductCard";
import "./productsContainer.css";
import { useDispatch, useSelector } from "react-redux";
import { selectItems, setItem } from "../../store/slices/products";
import { getProductDetailInformation } from "../../api/mlApi";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../common/constants/routes";

const ProductsContainer = () => {
  const items = useSelector(selectItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClickProduct = (id) => {
    getProductDetailInformation(id).then((res) => {
      dispatch(setItem(res.data.item));
      navigate(`${ROUTES.ITEMS}${id}`);
    });
  };

  return (
    <div className="mainContainer">
      <div className="productContainer">
        {items &&
          items.map((data, index) => {
            return (
              <Link
                key={index}
                className="link"
                onClick={() => handleClickProduct(data.id)}
              >
                <ProductCard productCardInfo={data} />
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default ProductsContainer;

import React from "react";
import shippingIcon from "../../assets/logo/logo_shipping.png";
import { formatNumberToCurrency } from "../../common/utils";
import "./productCard.css";

const ProductCard = (props) => {
  const { picture, price, free_shipping, title, location } =
    props.productCardInfo;
  return (
    <div className="productCardContainer">
      <div className="productCardContent">
        <div className="productImg">
          <img src={picture} alt="productImg" />
        </div>
        <div className="productDetails">
          <span className="price">
            {formatNumberToCurrency(price.amount)}
            {free_shipping ? (
              <img
                className="prodIcon"
                src={shippingIcon}
                alt="free shipping"
              />
            ) : (
              ""
            )}
          </span>
          <span className="productName">{title}</span>
        </div>
      </div>
      <div className="productLocation">{location}</div>
    </div>
  );
};

export default ProductCard;

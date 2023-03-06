import React from "react";
import { useSelector } from "react-redux";
import { formatNumberToCurrency } from "../../common/utils";
import { selectItem } from "../../store/slices/products";

import "./singleItemContainer.css";

const SingleItemContainer = (props) => {
  const item = useSelector(selectItem);

  return (
    <div className="mainSingleItemContainer">
      {item && (
        <>
          <div className="itemContentContainer">
            <div className="itemTop">
              <div className="prodImage">
                <img src={item.picture} alt="imgProd" />
              </div>
              <div className="itemInfo">
                <div className="itemDetails">
                  <span>
                    <p className="itemConditionDesc">
                      {item.condition === "new" ? "Nuevo " : "Usado"}
                    </p>
                  </span>
                  {item.sold_quantity !== 0 ? (
                    <span className="ventasItem">
                      - {item.sold_quantity} vendidos
                    </span>
                  ) : null}
                </div>
                <div className="itemName">{item.title}</div>
                <div className="itemPrice">
                  {formatNumberToCurrency(item.price.amount)}
                </div>
                <button className="itemBuy">Comprar</button>
              </div>
            </div>
            <div className="itemDescription">
              <div className="itemDescriptionTitle">
                Descripción del producto
              </div>
              <div className="itemDescriptionContainer">
                <p className="itemDescriptionText">{item.description}</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SingleItemContainer;

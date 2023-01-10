import React, { useState } from "react";
import "./style.css";
import { Button } from "antd";
import { useHistory } from "react-router-dom";
import FormatHelper from "../../helper/FormatHelper";
import likeIcon from "../../assets/images/postLike.svg";
import unLikeIcon from "../../assets/images/postUnlike.svg";
import trashIcon from "../../assets/shop/trash.svg";

const ProductCard = ({ product, index }) => {
  const history = useHistory();
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(0);
  return (
    <div key={index} className="product-card">
      {/* like */}
      <div onClick={() => setLiked(!liked)} className="product-card-like">
        <img src={!liked ? unLikeIcon : likeIcon} alt="like" />
      </div>
      <div onClick={() => history.push("/shop/view")}>
        <img src={product.icon} alt="product" />
      </div>
      <div>
        {/* title */}
        <div onClick={() => history.push("/shop/view")}>{product.title}</div>
        {/* price and discount */}
        <div onClick={() => history.push("/shop/view")}>
          {/* price */}
          <div>
            <span className="bold">
              {FormatHelper.toPersianString(
                FormatHelper.numberSeperator(product.price)
              )}
            </span>{" "}
            تومان
          </div>
          {/* discount */}
          <div>٪{FormatHelper.toPersianString(product.discount)}</div>
        </div>
        <div>
          {count === 0 ? (
            <Button onClick={() => setCount(1)} className="mv-button">
              <span>+</span>
              <span>افزودن به سبد</span>
            </Button>
          ) : (
            <div>
              <img
                onClick={() => setCount(count - 1)}
                src={trashIcon}
                alt="trash"
              />
              <span>{FormatHelper.toPersianString(count)}</span>
              <div onClick={() => setCount(count + 1)}>+</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

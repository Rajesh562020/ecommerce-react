import React from "react";
import { useCart } from "../../context/cart-context";
const ProductCardHorizontal = ({product}) => {
    const {id,name,image,oldPrice,newPrice,rating,discount,quantity} = product;
    const {cartDispatch} = useCart();

    const handleDec = (id) =>{
        cartDispatch({
            type:"DECREMENT",
            payload:id
        })
    }
    const handleInc = (id) =>{
        cartDispatch({
            type:"INCREMENT",
            payload:id
        })
    }
  return (
    <div class="card-horizontal d-flex shadow">
      <div class="card-hori-image-container relative">
        <img class="card-image" src={image} alt="shoes" />
        {/* <small class="c-badge bg-primary absolute left-0">Trending</small> */}
      </div>
      <div class="card-details d-flex direction-column">
        <div class="card-title">{name}</div>
        <div class="card-description">
          {/* <p class="card-des">Men Sneakers</p> */}
          <p class="card-price">
            Rs. {newPrice}
            <span class="price-strike-through padding-all-8">Rs. {oldPrice}</span>
            <span class="discount padding-all-8">({discount}% OFF)</span>
          </p>
        </div>
        <div class="quantity-container d-flex gap">
          <p class="q-title">Quantity: </p>
          <div class="count-container d-flex align-center gap">
            <button class="count" onClick={() => handleDec(id)} disabled={quantity === 1}>-</button>
            <span class="count-value">{quantity}</span>
            <button class="count"  onClick={() => handleInc(id)}>+</button>
          </div>
        </div>
        <div class="cta-btn d-flex gap">
          <div class="cta-btn">
            <button class="button hori-btn btn-primary btn-icon d-flex align-center justify-center gap cursor btn-margin">
              {/* <img src="/assets/cart-white.png" alt="cart" />  */}
              Add To Cart
            </button>
          </div>
          <div class="cta-btn">
            <button class="button hori-btn btn-outline-primary btn-icon d-flex align-center justify-center gap cursor btn-margin">
              Move to ❤️
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardHorizontal;

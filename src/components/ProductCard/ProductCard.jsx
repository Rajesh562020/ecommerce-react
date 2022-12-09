import React from 'react'
import './ProductCard.css';
import { useCart } from '../../context/cart-context';
import { getProductById } from '../../utils/findProductInCart';
import { useNavigate } from 'react-router-dom';
const ProductCard = ({product}) => {
    const {id,name,image,oldPrice,newPrice,rating,discount} = product;
   const {cart,cartDispatch} = useCart();
   const isProductInCart = getProductById(cart,id)
   
   const navigate = useNavigate();

   const handleAddToCart = () => {
    cartDispatch({
        type:"ADD_TO_CART",
        payload: product
    })
    //navigate("/cart");
   }

   const handleGoToCart = () => {
      navigate("/cart");
   }


  return (
    <div className="card card-vertical d-flex direction-column relative shadow">
     <div className="card-image-container">
          <img className="card-image" src={image} alt="books"/>
     </div>
     <div className="card-details">
          <div className="card-title">{name}</div>
          <div className="card-description">
               {/* <p className="card-des">Men Sneakers</p> */}
               <p className="card-price d-flex">
                  Rs. <span className='newPrice'>{newPrice}</span>
               	  <span className="price-strike-through">Rs.{oldPrice}</span>
                  <span className="discount">({discount}% OFF)</span>
               </p>
               <p className='d-flex align-center'>
                    <span class="star material-icons-outlined">
                        star
                    </span>{rating}
               </p>
          </div>
          <div className="cta-btn">
               <button className="button btn-primary btn-icon cart-btn d-flex align-center justify-center gap cursor btn-margin" onClick={isProductInCart ? handleGoToCart : handleAddToCart}>
               {/* <img src="/assets/cart-white.png" alt="cart">  */}
                 {isProductInCart ? "Go To Cart" : "Add To Cart"}
               </button>
          </div>
     </div>
</div>
  )
}

export default ProductCard;
import React, { useContext } from 'react'
import { ShopContext } from "../../context/shop-context"
import './Shop.css';


export const Product = (props) => {
const {id, prdName, price, productImage} = props.data;
const {addFromCart , cartItems} = useContext(ShopContext);

const cartItemAmount = cartItems[id];
  return (
    <div className="item">
        <img src={productImage} alt="" />
        <div className="description">
            <p> <b> {prdName} </b></p>
              
                <button className='addToCartBttn' onClick={() => addFromCart(id)}> Add To Cart
                { cartItemAmount > 0 && <b> ({cartItemAmount}) </b> }
                </button>
        </div>

        <div> 
        <img src="./assets/CP.jpg" alt="" /></div>
    </div>
    
  )
}




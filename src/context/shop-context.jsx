import React, { createContext , useState } from 'react'
import { DATA } from "../items"

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {}
  for (let i = 1; i < DATA.length + 1 ; i++ ){
    cart[i] = 0;
  }
  return cart;
}

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart);



const addFromCart = (itemId) => {
  setCartItems ((prev) => ({...prev, [itemId]: prev[itemId] + 1}));
};

const removeFromCart = (itemId) => {
  setCartItems ((prev) => ({...prev, [itemId]: prev[itemId] - 1}));
};

const updateCartItemCount = (newAmount, itemId ) => {
  setCartItems ((prev) => ({...prev, [itemId]: newAmount}));
} ;

const getTotalCartAmount = () => {
  let totalAmount = 0;
for (const itemId in cartItems){
 if (cartItems[itemId] > 0){
  let itemInfo = DATA.find((item) => item.id === Number(itemId))
  totalAmount += cartItems[itemId] * itemInfo.price;
}
}
return totalAmount;
};



const contextValue = {cartItems, addFromCart , removeFromCart , updateCartItemCount, getTotalCartAmount};



  return (
    <ShopContext.Provider value= {contextValue}>
      {props.children}
    </ShopContext.Provider>
  )
}

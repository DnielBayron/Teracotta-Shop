import {React, useContext} from 'react'
import {DATA} from '../../items';
import { ShopContext } from "../../context/shop-context"
import { CartItem } from './CartItem';
import './cart.css';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';



import {useNavigate} from 'react-router-dom'



export const Cart = () => {
  const {cartItems, getTotalCartAmount} = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h1>Cart</h1>
      </div>
      <div className="cartItems">
    {DATA.map ((item) => {
      if (cartItems[item.id] !== 0){
        return <CartItem data = {item} />
      }
    })}
      </div>

      {totalAmount > 0 ? 
      <div className='checkout'>
    <p><b>Subtotal: ₱{totalAmount}.00 </b> </p>
    <button onClick= {() => navigate("/")}>Continue Shopping</button>
    <button>Checkout</button>
      </div>
    : <button className= "addToCartBttn" onClick={() => navigate("/")}><AddShoppingCartIcon fontSize='large'/></button>}

    </div>
  )
}

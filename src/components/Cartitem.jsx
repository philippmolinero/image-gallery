import { Context } from "../Context/Context";
import { useContext } from "react";


const CartItem = () => {

  const {shoppingCart} = useContext(Context)

  const cartItems = shoppingCart.map(item => {
    return (
      <div className="cart-item-container">
        <i className="fa-solid fa-trash"></i>
        <img src={item.url} className="cart-img" key={item.id} />
        <p>Price: $6.99</p>
      </div>
      )
  })


  return (
    <div className="cart-container">
      <h1>You Cart</h1>
      {cartItems}
    </div>
  )
}


export default CartItem
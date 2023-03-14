import { Context } from "../Context/Context";
import { useContext } from "react";


const CartItem = () => {

  const {shoppingCart, removeFromCart} = useContext(Context)


  const cartItems = shoppingCart.map(item => {
    return (
      <div className="cart-item-container" key={item.id}>
        <i className="fa-solid fa-trash" onClick={() => removeFromCart(item)}></i>
        <img src={item.url} className="cart-img" key={item.id} />
        <p>Price: $6.99</p>
      </div>
      )
  })

  return (
    <div className="cart-container">
      <h1>You Cart</h1>
      {shoppingCart.length ? cartItems : <h2>nothing in here here</h2> }
    </div>
  )
}


export default CartItem
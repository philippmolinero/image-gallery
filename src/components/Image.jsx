import { useState, useContext } from "react"
import { Context } from "../Context/Context"

function Image({img, className}) {
  
  const [hovered, setHovered] = useState(false)
  const {toggleFavorite, shoppingCart, addToCart, removeFromCart} = useContext(Context)
  

  const heartIcon = ()  => {
    if(!img.isFavorite) {
      return hovered && <i className="fa-regular fa-heart favorite" onClick={() => toggleFavorite(img)}></i>
    } else return <i className="fa-solid fa-heart favorite" onClick={() => toggleFavorite(img)}></i>
    
  } 

  const cartIcon = ()  => {
   if(!shoppingCart.includes(img)) {
    return hovered && <i className="fa-solid fa-cart-plus cart" onClick={() => addToCart(img)}></i>
   } else if (hovered) {
    return <i className="fa-solid fa-trash cart" onClick={() => removeFromCart(img)}></i>
   }
  } 

  return(
  <div 
    className="image-container"
    onMouseEnter={() => setHovered(true)}
    onMouseLeave={() => setHovered(false)}
  >
    <img src={img.url} className="gallery-grid-img"/>
    {heartIcon()}
    {cartIcon()}
  </div>
  )
}

export default Image


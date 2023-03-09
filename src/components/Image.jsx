import { useState, useContext } from "react"
import { Context } from "../Context/Context"

function Image({img, className}) {
  
  const [hovered, setHovered] = useState(false)
  const {toggleFavorite} = useContext(Context)
  
  //   <i class="fa-solid fa-heart"></i>
  //   <i class="fa-solid fa-cart-circle-plus"></i>

  const heartIcon = ()  => {
    if(!img.isFavorite) {
      return hovered && <i className="fa-regular fa-heart" onClick={() => toggleFavorite(img)}></i>
    } else if (hovered) {
      return <i className="fa-solid fa-heart" onClick={() => toggleFavorite(img)}></i>
    }
  } 
  
  const cartIcon = hovered && <i className="fa-regular fa-cart-circle-plus"></i>


  return(
  <div 
    className="image-container"
    onMouseEnter={() => setHovered(true)}
    onMouseLeave={() => setHovered(false)}
  
  >
    <img src={img.url} className="gallery-grid-item"/>
    {heartIcon()}
    {cartIcon}
  </div>
  )
}

export default Image


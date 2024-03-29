import { createContext, useEffect, useState } from "react";
const Context = createContext()

function ContextProvider({children}) {
  
  
  const [allImages, setAllImages] = useState([])
  const [shoppingCart, setShoppingCart] = useState([])

  const url = "https://api.jsonbin.io/v3/b/64252800c0e7653a05997603/latest"


  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data => setAllImages(data.record))
  },[])

  const toggleFavorite = (item) => {
    // look for the same image id that it is clicked on and change the state of the isFavorite property for that one in the allImages array/state
    const updatedArr = allImages.map(image => {
      if(image.id === item.id) {
       return {...image, isFavorite: !image.isFavorite}
      } else {
        return image
      }
    })
    return setAllImages(updatedArr)
  }


  // Cart array is created, where all added items are "stored"
  // 1) Create function to add the selected item to the cart array
  // 1.1) Only add the item to the array if non existant
  // 2) Create function to remove the selected item from the cart array
  // 3) Change the icon of the cart to a trash icon, if it already exists in the cart array

  const addToCart = (cartItem) => {
    const filteredCart = shoppingCart.find(item => {
      return item === cartItem
    })
    if(!filteredCart) {
      return setShoppingCart(prevShoppingCart => [...prevShoppingCart, cartItem])
    }
  }

  // remove item from shoppingcart here

  const removeFromCart = (cartItem) => {
    const filteredCart = shoppingCart.filter(item => {
      return item !== cartItem
    })
    setShoppingCart(filteredCart)
  }

  
  return (
    <Context.Provider value={{allImages, toggleFavorite, shoppingCart, addToCart, removeFromCart}}>
      {children}
    </Context.Provider>
  )
}

export { ContextProvider, Context }
import { createContext, useEffect, useState } from "react";
const Context = createContext()

function ContextProvider({children}) {
  
  const [allImages, setAllImages] = useState([])
  const url = "../src/unsplash/images.json"

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data => setAllImages(data))
  },[])

  function toggleFavorite(item){
    console.log(item.id)
    // look for the same image id that it is clicked on and change the state of the isFavorite property for that one in the allImages array/state
    console.log(item.isFavorite)
    const updatedArr = allImages.map(image => {
      if(image.id === item.id) {
       return {...image, isFavorite: !image.isFavorite}
      } else {
        return image
      }
    })
    return setAllImages(updatedArr)
  }


  return (
    <Context.Provider value={{allImages, toggleFavorite}}>
      {children}
    </Context.Provider>
  )
}

export { ContextProvider, Context }
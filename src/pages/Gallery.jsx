import { useContext } from "react"
import Image from "../components/Image"
import { Context } from "../Context/Context"

function Gallery() {
  
  const {allImages} = useContext(Context)


  const gallery = allImages.map((image, i) => {
    return <Image img={image} key={image.id} className={i}/>
  })

  return (
    <main className="gallery">
     {gallery} 
    </main>
  )
}


export default Gallery
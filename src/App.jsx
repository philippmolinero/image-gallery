import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Gallery from "./pages/Gallery"
import Cart from "./pages/Cart"
import About from "./pages/About"
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {

  return (
    <Router>
    <div className="App">
      <Header />
      <Routes>
         <Route path='/' element={<Gallery />}></Route>
         <Route path='/about' element={<About />}></Route>
         <Route path='/cart' element={<Cart />}></Route>
      </Routes>
      <Footer/>
      </div>
    </Router>
  )
}


    // </div>
export default App

    
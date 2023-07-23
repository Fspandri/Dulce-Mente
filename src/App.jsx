import { BrowserRouter, Routes, Route } from "react-router-dom"
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"
import "./App.css"
import NavBar from "./componentes/NavBar/NavBar"
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer"
import Cart from "./componentes/Cart/cart"
import { CarritoProvider } from "../context/CartWidgetContext"
import Checkout from "./componentes/Checkout/Checkout"

const App = () => {
  return (
    <>
      <BrowserRouter>

        <CarritoProvider>
            <NavBar />
              <Routes>
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path="/productos/:idCat" element={<ItemListContainer/>}/>
                <Route path="/item/:id" element={<ItemDetailContainer/>}/>
                <Route path="/cart" element={<Cart/>} />
                <Route path='/checkout' element={<Checkout/>} />
              </Routes>
        </CarritoProvider>

      </BrowserRouter>  

    </>
  )
}

export default App

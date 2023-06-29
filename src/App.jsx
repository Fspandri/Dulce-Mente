import { BrowserRouter, Routes, Route } from "react-router-dom"
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"
import "./App.css"
import NavBar from "./componentes/NavBar/NavBar"
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer"


const App = () => {
  return (
    <>
      <BrowserRouter>

        <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/productos/:idCat" element={<ItemListContainer/>}/>
            <Route path="/item/:id" element={<ItemDetailContainer/>}/>
          </Routes>

      </BrowserRouter>  
    </>
  )
}

export default App

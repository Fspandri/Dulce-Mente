import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"
import './App.css'
import NavBar from "./componentes/NavBar/NavBar"

const App = () => {
  return (
    <>
    <NavBar/>
    <h1>Pastelería Artesanal</h1>
    <ItemListContainer greeting = {"Bienvenidos a Dulce Mente"}/>
    </>
  )
}

export default App

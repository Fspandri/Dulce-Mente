import { useState, useEffect } from "react"
import ItemList from "../ItemList/itemList"
import { getProductos, getCategoriaProducto } from "../../asyncmock"
import { useParams } from "react-router-dom"

const ItemListContainer = () => {

  const [productos, setProductos] = useState([]);

  const {idCat} = useParams();      

  useEffect(() => {
    const funcionProductos = idCat ? getCategoriaProducto : getProductos;
    
    funcionProductos(idCat)
        .then(respuesta => setProductos(respuesta))
  }, [idCat])

  return (
      <div>
          <ItemList productos={productos} />

      </div>
  )
}

export default ItemListContainer
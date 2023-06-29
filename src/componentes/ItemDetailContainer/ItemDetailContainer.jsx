import { useState, useEffect } from "react"
import { getUnicoProducto } from "../../asyncmock"
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const {id} = useParams();

  const [producto, setProducto] = useState(null);

  useEffect( () => {
    getUnicoProducto(id)
      .then(res => setProducto(res))
  }, [])

  return (
    <div className="w-100 d-flex justify-content-center">
      <ItemDetail {...producto}/>
    </div>
  )
}

export default ItemDetailContainer
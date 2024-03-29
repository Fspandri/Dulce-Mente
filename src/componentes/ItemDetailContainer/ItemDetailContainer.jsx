import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import {getDoc, doc} from "firebase/firestore";
import { db } from "../../services/config";

const ItemDetailContainer = () => {
  const {id} = useParams();

  const [producto, setProducto] = useState(null);

  useEffect( () => {
    const nuevoDoc = doc(db, "productos", id);
    
    getDoc(nuevoDoc)
    .then(res => {
      const data = res.data();
      const nuevoProducto = {id:res.id, ...data};
      setProducto(nuevoProducto);

    })

    .catch(error => console.log(error))

  }, [id])

  return (
    <div className="w-100 d-flex justify-content-center">
      <ItemDetail {...producto}/>
    </div>
  )
}

export default ItemDetailContainer
import { useState, useEffect } from "react"
import ItemList from "../ItemList/itemList"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../services/config';

const ItemListContainer = () => {

  const [productos, setProductos] = useState([]);

  const {idCat} = useParams();      


useEffect( () => {
  const misProductos = idCat ? query(collection(db, "productos"), where("idCat", "==", idCat)) : collection(db,"productos");

  getDocs(misProductos)
    .then(res => {
      const nuevosProductos = res.docs.map(doc => {
        const data = doc.data();
        return {id: doc.id, ...data}
      })
      setProductos(nuevosProductos);
    })
    .catch(error => console.log(error))
  
}, [idCat])

return (
  <>
      <h1> Pasteleria Artesanal </h1>
      <ItemList productos={productos} />
  </>
)

}


export default ItemListContainer
import { useState } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import { useContext } from 'react'
import { CartWidgetContext } from '../../../context/CartWidgetContext'
import "./ItemDetail.css"

const ItemDetail = ({id, nombre, precio, img, stock, descripcion}) => {

  const [agregarCantidad, setAgregarCantidad] = useState(0);
  const {agregarProducto} = useContext(CartWidgetContext);

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);

    const item = {id, nombre, precio, img};
    agregarProducto(item, cantidad);
}

    return (
      <div className="cardProductoInd">
          <h2>{nombre}</h2>
          <img src={img} alt={nombre} />
          <h3>Precio: ${precio}</h3>
          <h3>ID: {id}</h3>
          <p>{descripcion}</p>
              {
                agregarCantidad > 0 ? (<Link to="/cart" className="btnCompra"> Finalizar Compra</Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/>)
              }
      </div>
    )
}

export default ItemDetail
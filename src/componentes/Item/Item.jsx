import { Link } from "react-router-dom"
import "./Item.css"

const Item = ({id, nombre, precio, img, stock}) => {
  return (
    <div className="cardProducto">
        <img src={img} alt={nombre} />
        <h3>{nombre} </h3>
        <p> Precio: ${precio} </p>
        <p> ID: {id} </p>
        <p>Stock: {stock}</p>
        <Link to={`/item/${id}`}>
          <button className="botonProducto">Ver Detalle</button>  
        </Link>
    </div>
  )
}

export default Item
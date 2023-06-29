import "./ItemDetail.css"

const ItemDetail = ({id, nombre, precio, img}) => {
  return (
    <div className="cardProductoInd">
        <h2>{nombre}</h2>
        <img src={img} alt={nombre} />
        <h3>Precio: ${precio}</h3>
        <h3>ID: {id}</h3>
    </div>
  )
}

export default ItemDetail
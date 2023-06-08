import './CartWidget.css'

const CartWidget = () => {
    const carrito = "../public/img/carrito.png"
  
  return (
    <div className= "d-flex">
        <img className= "carrito" src={carrito} alt="Imagen de Carrito"/>
        <strong>1</strong>
    </div>
  )
}

export default CartWidget

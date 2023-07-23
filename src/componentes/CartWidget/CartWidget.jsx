import { useContext } from 'react';
import { CartWidgetContext } from '../../../context/CartWidgetContext';
import { Link } from 'react-router-dom';
import './CartWidget.css';

const CartWidget = () => {
  const {cantidadTotal} = useContext(CartWidgetContext);
  const carrito = "../public/img/carrito.png"

  return (
    <div className="d-flex">

      <Link style= {{color:"rgb(2, 116, 2)", textDecoration: "none"}} to="/cart">
        <img className="carrito" src={carrito} alt="Imagen de Carrito" />
        {
          cantidadTotal > 0 && <strong> {cantidadTotal} </strong>
        }
      </Link>

    </div>
  )
}

export default CartWidget

import { useContext } from "react";
import { CartWidgetContext } from "../../../context/CartWidgetContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/cartItem";
import './Cart.css';

const Cart = () => {
    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CartWidgetContext);

    if (cantidadTotal === 0) {
        return (
            <>
                <h2>No hay productos en el carrito</h2>
                <Link to="/"> Ver Productos </Link>
            </>
        )
    }
    return (
        <div>
            {carrito.map(producto => <CartItem key={producto.item.id} {...producto} />)}
            <h3>Total: $ {total} </h3>
            <h3> Cantidad Total : {cantidadTotal}  </h3>
            <button className="btnVaciarCarrito" onClick={() => vaciarCarrito()} > Vaciar Carrito </button>
            <Link  style={{ border:"2px solid rgb(2, 116, 2) ", padding: "7px", borderRadius: "8px", color: "rgb(251, 133, 83)", textDecoration: "none", fontWeight: "bold"}} to="/checkout"> Finalizar Compra </Link>
        </div>
    )
}

export default Cart
import { useContext } from "react";
import { CartWidgetContext } from "../../../context/CartWidgetContext";
import './CartItem.css';

const CartItem = ({ item, cantidad }) => {
    const { eliminarProducto } = useContext(CartWidgetContext);

    return (
        <div>
            <div className="estiloProducto">
                <img className="estiloimg" src={item.img} alt="nombre" />
            </div>
            <div className="estiloProducto">
                <h3> {item.nombre} </h3>
                <p> Cantidad: {cantidad}</p>
                <p> Precio: ${item.precio}</p>
                <button className="btnEliminar" onClick={() => eliminarProducto(item.id)}> Eliminar </button>
            </div>
        </div>
    )
}

export default CartItem
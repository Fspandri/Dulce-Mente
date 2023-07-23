import { useState, useContext } from "react";
import { CartWidgetContext } from "../../../context/CartWidgetContext";
import { db } from "../../services/config";
import { collection, addDoc } from "firebase/firestore";
import './Checkout.css';

const Checkout = () => {
    const { carrito, vaciarCarrito, cantidadTotal, total} = useContext(CartWidgetContext);
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmacion, setEmailConfirmacion] = useState("");
    const [error, setError] = useState("");
    const [orderId, setOrdenId] = useState("");

    const manejadorFormulario = (e) => {
        e.preventDefault();

        if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            setError("Por favor complete todos los campos para finalizar su compra");
            return;
        }

        if (email !== emailConfirmacion) {
            setError("El email ingresado no coincide, por favor completar nuevamente");
            return;
        }

        const orden = {
            items: carrito.map(producto => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad,
            
            })),
            cantidadTotal,
            total,
            nombre,
            apellido,
            telefono,
            email
        };

        addDoc(collection(db, "ordenes"), orden)
            .then(docRef => {
                setOrdenId(docRef.id);
                vaciarCarrito();
            })
            .catch(error => {
                console.log("Error al generar la orden", error);
                setError("Se produjo un error al crear la orden, por favor intente cargarla nuevamente.");
            })
    }

    return (
        <div>
            <h2>Checkout</h2>
            <form onSubmit={manejadorFormulario}>
                {carrito.map(producto => (
                    <div key={producto.item.id}>
                        <p>
                            {producto.item.nombre} x {producto.cantidad}
                        </p>
                        <p>Precio $ {producto.item.precio} </p>
                        
                    </div>
                ))}
                <p>Cantidad total de produtos: {cantidadTotal} </p>
                <p>Precio Total $ {total}</p>
                <hr />

                <div className="formulario">
                    <label htmlFor="nombre"> Nombre </label>
                    <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                </div>

                <div className="formulario">
                    <label htmlFor=""> Apellido </label>
                    <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                </div>

                <div className="formulario">
                    <label htmlFor=""> Telefono </label>
                    <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                </div>

                <div className="formulario">
                    <label htmlFor=""> Email </label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="formulario">
                    <label htmlFor=""> Confirmación de Email </label>
                    <input type="email" value={emailConfirmacion} onChange={(e) => setEmailConfirmacion(e.target.value)} />
                </div>

                {
                    error && <p style={{ color: "red" }}> {error} </p>
                }

                <button className="botonFin w-100" type="submit"> Finalizar Compra </button>
            </form>
            {
                orderId && (
                    <strong className="estiloOrden">¡Muchas gracias por su compra! Su número de orden es {orderId} </strong>
                )
            }


        </div>
    )
}

export default Checkout

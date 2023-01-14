import React from "react";
import { CartContext } from "./context/CartContext";
import { addDoc, collection, getFirestore} from "firebase/firestore";
import { useState } from "react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

const Checkout = () => {

    const {cart, clear, sumTotal, cartTotal} = useContext(CartContext);
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [IdPedido, setIdPedido] = useState("");

    const pedido = () => {
        const fecha = new Date();
        const pedido = {
            buyer: {name:nombre, email:email, phone:telefono},
            items: cart.map(item => ({id:item.id, title:item.nombre, price:item.precio, quantity:item.quantity, price_total:item.quantity * item.precio})),
            date: `${fecha.getDate()}-${fecha.getMonth()+1}-${fecha.getFullYear()} ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`,
            total: sumTotal(),
            quantity: cartTotal()
        };

        const db = getFirestore();
        const pedidosCollection = collection(db, "pedidos");
        addDoc(pedidosCollection, pedido).then((snapShot) => {
            setIdPedido(snapShot.id);
            clear();
        });}

    return (
        <div className="container">
            <div className="row my-5">
                <div className="col">
                    <form className="formulario">
                        <div className="mb-3">
                            <label htmlFor="nombre" className="form-label">Nombre y apellido</label>
                            <input type="text" className="form-control" id="nombre" placeholder="Ingrese su nombre y apellido" onInput={(e) => {setNombre(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">E-mail</label>
                            <input type="text" className="form-control" id="email" placeholder="Ingrese su E-mail" onInput={(e) => {setEmail(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="telefono" className="form-label">WhatsApp</label>
                            <input type="text" className="form-control" id="telefono" placeholder="Ingrese su nro de WhatsApp" onInput={(e) => {setTelefono(e.target.value)}} />
                        </div>
                    </form>
                    <button type="button" onClick={pedido} className="btn">Realizar pedido</button>
                </div>
                <div className="col">
                    <table className="table">
                        <tbody>
                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td><img src={item.imagen} alt={item.nombre} width={64} /></td>
                                    <td className="align-middle">{item.nombre}</td>
                                    <td className="text-center align-middle">{item.quantity}</td>
                                    <td className="text-center align-middle">${item.quantity * item.precio}</td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan={3} className="text-end"><b>Precio final</b></td>
                                <td className="text-center"><b>${sumTotal()}</b></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row my-5">
            <div className="pedido">
                <div className="col text-center">
                {IdPedido ? <Navigate to={"/seguimiento/" + IdPedido} /> : ""}
                </div>
            </div>
        </div>
    </div>
    )}

export default Checkout;
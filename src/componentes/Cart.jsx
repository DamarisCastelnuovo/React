import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./context/CartContext";

const Cart = () => {
    const {cart, removeItem, clear, sumTotal, cartTotal} = useContext(CartContext);
    if (cartTotal() === 0) {
        return (
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div className="alert alert-danger" role="alert">No hay productos cargados en el carrito.</div>
                        <Link to={"/"} className="btn">Ir al inicio</Link>
                    </div>
                </div>
            </div>
        )}

    return(
        <div className="container py-5">
            <div className="row">
                <div className="col-md-12">
                    <table className="table">
                        <thead>
                            <tr>
                            <th scope="col" className="text-end" colSpan={5}><Link onClick={clear} className="btn " title="Vaciar Carrito">Vaciar Carrito</Link></th>
                            </tr>
                            <tr>
                            <th scope="col">&nbsp;</th>
                            <th scope="col">Producto</th>
                            <th scope="col" className="text-center">Cantidad</th>
                            <th scope="col" className="text-center">Precio</th>
                            <th scope="col">&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map(item=> (
                                <tr key={item.id}>
                                    <td><img src={item.imagen} alt={item.nombre} width={48}></img></td>
                                    <td>{item.nombre}</td>
                                    <td className="text-center">{item.quantity}</td>
                                    <td className="text-center">${item.quantity * item.precio}</td>
                                    <td className="text-center"><Link onClick={() => {removeItem(item.id)}}title="Eliminar Producto"><img src={"imagenes/trash.svg"} alt={"borrar item"} width={32}/></Link></td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan={2}>&nbsp;</td>
                                <td className="text-center">Suma total</td>
                                <td className="text-center"><b>${sumTotal()}</b></td>
                                <td className="text-end"><Link to={"/checkout"} className="btn" title="Finalizar Compra">Finalizar pedido</Link></td>
                                <td>&nbsp;</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )}

export default Cart;
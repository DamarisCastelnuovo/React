import React from "react";

import { CartContext } from "./context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const CartWidget = () => { 
    const {cartTotal} = useContext(CartContext);
    
        return cartTotal() ? <Link to={"/cart"} className="btn position-relative" title="Ir al carrito">
        <img src={"/imagenes/basket.svg"} alt={"Carrito"} width={24} />
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{cartTotal()}</span>
    </Link> : "";
}


export default CartWidget;
    
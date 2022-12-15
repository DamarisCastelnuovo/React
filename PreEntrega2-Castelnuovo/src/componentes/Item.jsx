import React from "react";
import { Link } from "react-router-dom";

const Item = ({item}) =>{
    return (
        <Link to={"/item/" + item.id} className="text-decoration-none text-dark">
            <div className="card">
                <img src={item.imagen} alt={item.nombre} className="imagenes card-img-top"/>
                <div className="card-body text-center">
                    <p className="card-text">{item.nombre}</p>
                </div>
            </div>
        </Link>
    )
}

export default Item;
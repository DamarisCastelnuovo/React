import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({item}) =>{
    return (
        <div className="row">
            <div className="col-md-6 offset-md-3 text-center">
                <img src={item.imagen} alt={item.nombre} className="img-fluid"/>
                <h1>{item.nombre}</h1>
                <p><b>${item.precio}</b></p>
            </div>
            <ItemCount stockItems={item.stock}/>
        </div>
    )
}

export default ItemDetail;
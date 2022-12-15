import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import ArrayProductos from "../Json/ArrayProductos.json";

const ItemDetailContainer = () =>{
    const [item, setItem] = useState({});
    const {id} = useParams();

    useEffect(()=>{
        const promesa = new Promise((resolve)=>{
            setTimeout(()=>{
                resolve(ArrayProductos.find(item => item.id === parseInt(id)));
            }, 2000);
        })

        promesa.then((data)=>{
            setItem(data);
        })

    }, [id]);

    return (
        <div className="container">
            <ItemDetail item={item}/>
        </div>
    )
}

export default ItemDetailContainer;
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import {doc, getDoc, getFirestore} from "firebase/firestore";

const ItemDetailContainer = () =>{
    const [item, setItem] = useState({});
    const {id} = useParams();

//Chequear con Firestore un ID
useEffect(() => {
    const db = getFirestore();
    const documento = doc(db, "items", id);
    getDoc(documento).then((snapShot) => {
        if (snapShot.exists()) {
            setItem({id:snapShot.id, ...snapShot.data()});
        } else {
            console.log("Error.");
        }
    });
}, [id]);

    return (
        <div className="container">
            <ItemDetail item={item}/>

        </div>
    )}

export default ItemDetailContainer;
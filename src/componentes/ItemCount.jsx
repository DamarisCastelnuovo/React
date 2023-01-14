import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({stock, onAdd}) => {
    const [counter, setCounter] = useState(1);
    const [itemStock, setItemStock] = useState(stock);
    const [vendido, setVendido]= useState (false);
    
    
    //Funcion para incrementar contador 
    const incrementarContador = () => {
        //no dejamos se ingresa mas del stock limite
        if(counter < itemStock){
            setCounter(counter + 1);
        }     
    }
    //Funcion para decrementar contador
    const decrementarContador = () => {
        //no dejamos que se ingresen nªs negativos
        if(counter > 1){
        setCounter(counter - 1);
        }
    }
    //Funcion para agregar productos al carro y no sobrepasar el stock disponible
    const addToCart = (quantity) => {
       setVendido(true);
       setItemStock(itemStock - quantity); 
       setCounter(1); 
       onAdd(quantity);
        
    }

useEffect(()=>{
       setItemStock(stock);

    },[stock])

    return(
        <div className="container">
            <div className="row mb-3">
                <div className="col-md-12">
                    <div className="btn-group" role="group" aria-label="Basic outlined example">
                        <button type="button" className="btn" onClick={decrementarContador}>-</button>
                        <button type="button" className="btn  espacio">{counter}</button>
                        <button type="button" className="btn" onClick={incrementarContador}>+</button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    {vendido ? <Link to={"/cart"} className="btn">terminar mi compra</Link> : <button className="btn " onClick={()=> {addToCart(counter)}}>Agregar al carrito</button>}
            </div>
            
            </div>
        </div>
    )
}

export default ItemCount;




/*import {useState} from "react";
import React from "react";

const ItemCount = ({stockItems}) => {
    const [counter, setCounter] = useState(1);
    const [stock, setStock] = useState(stockItems);

    const incrementarStock = () =>{
        if (counter < stock)
        setCounter (counter + 1);
    }

    const restarStock = () =>{
        if (counter > 1)
        setCounter (counter - 1);
    }

    const onAdd = () =>{
        if((stock > 0) && (counter <= stock)){
        
        console.log(`Agregaste ${counter} productos al carrito`);
        setStock(stock - counter);
        setCounter(1);
    }
}
    return (
        <div className="container text-center">
            <div className="row mb-3">
                <div className="col-md-12">
                    <div className="btn-group" role="group" aria-label="Basic outlined example">
                        <button type="button" className="btn btn-outline-primary" onClick={restarStock}>-</button>
                        <button type="button" className="btn btn-outline-primary">{counter}</button>
                        <button type="button" className="btn btn-outline-primary" onClick={incrementarStock}>+</button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <button className="btn btn-outline-primary" onClick={onAdd}>Agregar al carrito</button>
                </div>
            </div>
        </div>
    )
}
*/

import {useState} from "react";
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

    const productoAgregado = () =>{
        if (counter <= stock)
        console.log(`Agregaste ${counter} productos al carrito`);
        setStock(stock - counter);
        setCounter(1);
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
                    <button className="btn btn-outline-primary" onClick={productoAgregado}>Agregar al carrito</button>
                </div>
            </div>
        </div>
    )
}

export default ItemCount;
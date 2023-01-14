import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Seguimiento = () => {
    const {id} = useParams();

    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-md-12 text-center">
                    <div className="alert alert-danger" role="alert">
                        <h1>¡Muchas Gracias!</h1>
                        <p>Su número de seguimiento es: <b>{id}</b>, en la brevedad nos estaremos comunicando a su WhatsApp registrado.</p>
                    </div>
                    <Link to={"/"} className="btn">Volver al inicio</Link>
                </div>
            </div>
        </div>
    )
}

export default Seguimiento;
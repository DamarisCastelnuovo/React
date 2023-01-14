import React from "react";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";


const NavBar = () =>{
    return(
        <div className="nav">
            <div className="row">
                <div className="col-md-6">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <Link className="navbar-brand" to="/"><img src={"imagenes/icono.webp"} alt={"logo joyeria"} width={80} /></Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                    <NavLink className="nav-link" aria-current="page" to={"/category/Samsung"}>Samsung</NavLink>
                                    </li>
                                    <li className="nav-item">
                                    <NavLink className="nav-link" to={"/category/Apple"}>Apple</NavLink>
                                    </li>
                                    <li className="nav-item">
                                    <NavLink className="nav-link" to={"/category/Xiaomi"}>Xiaomi</NavLink>
                                    </li>
                                    <li className="nav-item">
                                    <NavLink className="nav-link" to={"/category/Suunto"}>Suunto</NavLink>
                                    </li>
                                    <li className="nav-item">
                                    <NavLink className="nav-link" to={"/category/Huawei"}>Huawei</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="col-md-6 d-flex justify-content-end align-items-center">
                    <CartWidget/>
                </div>
            </div>
        </div>
    )
}
export default NavBar;

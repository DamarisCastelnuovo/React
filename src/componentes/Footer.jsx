import React from "react";
import { NavLink } from "react-router-dom";

const footer =()=> {
    return(
        <div>
            <footer className="Footer">
                <div className="container">
                    <div className="row">
                        <div>
                            <p>Nos encontramos en Avenida Peron 234, nuestro contacto telefonico 0800-457829.</p>  
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8 col-sm-6 col-xs-12">
                                    <p className="copyright-text">Copyright &copy;
                                    <NavLink to="/">JoyeriaCD</NavLink>.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>

    )
}

export default footer;
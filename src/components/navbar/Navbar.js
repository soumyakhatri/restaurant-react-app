import React from 'react'
import logo from '../../images/Logo.png'


function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-xl navbar-dark bg-none">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img src={logo} alt="" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
                        <div className="navbar-nav nav-links fs-5 ms-auto justify-content-end">
                            <a className="nav-link " aria-current="page" href="#">Home</a>
                            <a className="nav-link " href="#">About</a>
                            <a className="nav-link " href="#">Ingredients</a>
                            <a className="nav-link " href="#">Menu</a>
                            <a className="nav-link ">Reviews</a>
                            <a className="nav-link ">Reservation</a>
                            <div className="ssm-icon-div d-flex flex-row">
                                <a className="nav-link ms-1 me-3 me-lg-0" href="#"><i className="fab fa-twitter ssm-icon "></i></a>
                                <a className="nav-link ms-1 me-3 me-lg-0" href="#"><i className="fab fa-youtube ssm-icon"></i></a>
                                <a className="nav-link ms-1" href="#"><i className="fab fa-facebook-f ssm-icon"></i></a>
                            </div>

                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar

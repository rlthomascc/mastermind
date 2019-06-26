import React from 'react';

const Navbar = () => {

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand">Navbar</a>
                <div className="collapse navbar-collapse">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link" href="">Home</a>
                        <a className="nav-item nav-link" href="">Don Wright</a>
                        <a className="nav-item nav-link" href="">Randy Thomas</a>
                    </div>
                    {/* ATTEMPT DROP DOWN MENU */}
                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                </div>
            </nav>
        </div>
    )

}

export default Navbar
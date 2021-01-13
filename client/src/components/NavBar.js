import React from 'react';

function NavBar() {
    return (
    <>
        <nav className="navbar navbar-expand-lg red" sticky="top">
            <div className="container">
                <a className="navbar-brand" href="/">Quiz Game</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarToggler">
                    <ul className="navbar-nav ml-lg-5 mt-3 mt-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Start a Quiz-</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/signup">Sign Up</a>
                        </li>
                    </ul>
                    <div className="ml-auto my-2 my-lg-0">
                        <a className="btn btn-dark rounded-pill nav-link" href="/login">Log In</a>
                    </div>
                </div>
            </div>
        </nav>
    </>
    )
}

export default NavBar;
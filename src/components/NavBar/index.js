import React from 'react';
import './style.css';

export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">

            {/* Brand Name */}
            <a className="navbar-brand" href="/">Zhouyi Wang</a>

            {/* Toggle Button */}
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            {/* Menu Items */}
            <section className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Portfolio</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Contact<span className="sr-only">(current)</span></a>
                    </li>
                </ul>
            </section>

        </nav>
    )
}

import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

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
                    <Link to="/" className="nav-link">
                        <li className="nav-item">About</li>
                    </Link>
                    <Link to="/portfolio" className="nav-link">
                        <li className="nav-item">Portfolio</li>
                    </Link>
                    <Link to="/contact" className="nav-link">
                        <li className="nav-item active">Contact</li>
                    </Link>
                </ul>
            </section>

        </nav>
    )
}

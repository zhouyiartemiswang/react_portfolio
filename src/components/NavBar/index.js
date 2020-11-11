import React from 'react'

export default function NavBar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">

            {/* Brand Name */}
            <a class="navbar-brand" href="../../index.html">Zhouyi Wang</a>

            {/* Toggle Button */}
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            {/* Menu Items */}
            <section class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="/">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/">Portfolio</a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="/">Contact<span class="sr-only">(current)</span></a>
                    </li>
                </ul>
            </section>

        </nav>
    )
}

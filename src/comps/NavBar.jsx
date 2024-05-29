import React from 'react'

function NavBar() {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <a class="navbar-brand" href="#home">Insert logo here</a> {/*Rememba*/}
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <a class="nav-link" aria-current="page" href="#">Services </a>
                        <a class="nav-link" href="#">Notre équipe </a>
                        <a class="nav-link" aria-current="page" href="#">Prendre rendez-vous </a>
                        <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
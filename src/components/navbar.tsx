import React from "react";

export const Navbar: React.FC = () => {
    return(
        <header className="navbar-light navbar-top-light fixed-top header-static bg-mode pt-2 pb-2">
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <a className="navbar-brand">
                        <img className="light-mode-item navbar-brand-item" src="/images/coinhook.png" alt="logo" width="146"></img>
                    </a>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav navbar-nav-scroll ms-auto">
                            <li className="nav-item">
                                <a href="/" className="nav-link">Home</a>
                            </li>
                            <li className="nav-item">
                                <a href="/explore" className="nav-link">Explore</a>
                            </li>
                            <li className="nav-item">
                                <a href="/create" className="nav-link">Create</a>
                            </li>
                            <li className="nav-item">
                                <a href="/connect" className="ms-2 btn btn-primary">Connect</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}
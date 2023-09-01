import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
<div>
    <header class="site-header">
    <div class="container">
        <div class="row">
            
            <div class="col-lg-12 col-12 d-flex flex-wrap">
                <p class="d-flex me-4 mb-0">
                    <i class="bi-house-fill me-2"></i>
                    One-Stop Tech
                </p>

                <p class="d-flex d-lg-block d-md-block d-none me-4 mb-0">
                    <i class="bi-clock-fill me-2"></i>
                    <strong class="me-2">Mon - Fri</strong> 8:00 AM - 5:30 PM
                </p>

                <p class="site-header-icon-wrap text-white d-flex mb-0 ms-auto">
                    <i class="bi-envelope-fill me-2"></i>

                    <a href="mailto:info@company.com" class="site-footer-link">
                        mss@gmail.com
                    </a>
                </p>
                <p class="text-white d-flex">
                    
                </p>
            </div>

        </div>
    </div>
</header>

<nav class="navbar navbar-expand-lg">
    <div class="container">
        <a class="navbar-brand" href="index.html">
            <img src="images/avatar/eloogo.png" class="logo img-fluid" alt="" />

            <span class="ms-2">MSS Mjcet</span>
        </a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                <NavLink className="nav-link" to="/">
                    <a class="nav-link active" href="index.html">Home</a>
                </NavLink>
                </li>

                <li class="nav-item">
                <NavLink className="nav-link" to="/about">
                    <a class="nav-link" href="about.html">About Us</a>
                </NavLink>
                </li>

                <li class="nav-item dropdown">
                <NavLink className="nav-link" to="/pages">
                    <a class="nav-link dropdown-toggle" href="#section_5" id="navbarLightDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Pages</a>
                </NavLink>
                    { <ul class="dropdown-menu dropdown-menu-light" aria-labelledby="navbarLightDropdownMenuLink">
                        <li >
                        <NavLink  to="/soon">
                            <a class="dropdown-item" href="services.html">Our Services</a></NavLink></li>
                        
                        <li><NavLink  to="/soon">
                            <a class="dropdown-item" href="coming-soon.html">Coming Soon</a></NavLink></li>

                        <li><NavLink  to="/soon">
                            <a class="dropdown-item" href="page-404.html">Page 404</a></NavLink></li>
                    </ul> }
                </li>

                <li class="nav-item">
                <NavLink className="nav-link" to="/contact">
                    <a class="nav-link" href="contact.html">Contact</a>
                </NavLink>
                </li>

                <li class="nav-item ms-3">
                <NavLink className="nav-link" to="/started">

                    <a class="nav-link custom-btn custom-border-btn custom-btn-bg-white btn" href="#">Get started</a>
                </NavLink>
                </li>
            </ul>
        </div>
    </div>
</nav>
</div>
  );
}

export default Navigation;
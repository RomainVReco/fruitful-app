import React from "react";
import Header from '../../components/header/Header';
import Footer from '../../components/Footer';
import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <div className="layout-container">
            <div className="footer-content-container">
                <Header />
                <Outlet />
            </div>
            <footer className="footer--pin">
                <Footer />
            </footer>
        </div>
    )
}
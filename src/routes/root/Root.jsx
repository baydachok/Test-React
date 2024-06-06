import './Root.css';
import Navigation from "../../components/navigation/Navigation";
import React from "react";
import {Outlet} from "react-router-dom";
import {Login} from "../../components/terms/Login";
import {useSelector} from "react-redux";
import axios from "axios";

function Root() {
    (function() {
        const token = useSelector((state) => state.auth.token);
        if (token) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        } else {
            axios.defaults.headers.common['Authorization'] = null;
        }
    })();

    return (
        <div className="root-page">
            <Navigation/>
            <Login/>
            <header className="App-header">
                <a
                    className="App-link"
                    href="https://github.com/RRifen/Development-of-client-server-applications"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Github с практиками
                </a>
            </header>
            <Outlet />
        </div>
    );
}

export default Root;

import React from 'react';
import logo from '../images/airbnb-logo.svg'

export default function Navbar() {
    return (
        <div>
            <div className="nav-logo">
                <img src={logo} />
            </div>
        </div>
    )
}

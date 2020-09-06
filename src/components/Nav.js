import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

export default function Nav() {
    return (
        <div>
            <Navbar dark color="primary">
                <div className="container">
                    <NavbarBrand href="/">
                        Ristorante Con Fusion
                    </NavbarBrand>
                </div>
            </Navbar>
        </div>
    )
}

import React from 'react';

export default function Header(props) {
    return (
        <header>
            <div>
                <a href="#/">
                    <h1>Shopping Cart</h1>
                </a>
            </div>

            <div>
                <a href="#/cart">Cart</a>
                <a href="#/login">Login</a>
            </div>
            
            <div></div>
        </header>
    );
}

import React from 'react';
import logo from '../assets/images/logo-header.png';

const Header = () => {
    return (
        <header class="_header">
            <div class="_wrapper">
                <div class="_row-center _header-row">
                    <div class="_col">
                        <a class="header-logo" href="/">
                            <img src={ logo } alt="Blog Logo" />
                        </a>
                    </div>
                    <div class="_col txt-right">
                        <a  class="header-link" href="/">
                            LOGIN
                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
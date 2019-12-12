import React from 'react';
import Menu from './Menu';
import Logo from '../../assets/img/logo.png';
import './styles.css';

const Nav = () => {
    return (
        <nav className="navbar">
            <nav className="logo">
                <img
                    src={Logo}
                    alt="Logotipo do site Cantinho da Leitura"
                    className="navbar-logo"
                />
                <h2 className="texto-logo">Cantinho da Leitura</h2>
            </nav>
            <Menu />
        </nav>
    )
}

export default Nav;
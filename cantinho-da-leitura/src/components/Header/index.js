import React from 'react';
import './styles.css'

const Header = (props) => {
    return (
        <section className={props.classe}>
            <h1>{props.titulo}</h1>
        </section>
    )
}

export default Header;
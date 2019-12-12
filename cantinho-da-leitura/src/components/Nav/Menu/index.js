import React from 'react';
import { Link } from 'react-router-dom'
import './styles.css';

class Menu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false
        }
    }

    handleOpenClose = () => {
        this.setState((prevState) => {
            return {
                open: !prevState.open
            }
        })
    }

    render() {
        let classeDasOpcoes = "navbar-menu__opcoes"
        let classeDoBotao = "navbar-menu__botao"

        if (this.state.open) {
            classeDasOpcoes += " navbar-menu__opcoes--aberto"
            classeDoBotao += " navbar-menu__botao--aberto"
        }

        return (
            <div className="nav-menu navbar-links">
                <span className={classeDoBotao} onClick={this.handleOpenClose}>
                    Menu
                </span>
                <ul className={classeDasOpcoes}>
                <li><Link to='/' className="navbar-links__ativo">Home</Link></li>
                <li><Link to='/por-que-ler' className="navbar-links__ativo">Por que ler?</Link></li>
                <li><Link to='/melhores-da-semana' className="navbar-links__ativo">Os melhores</Link></li>
                <li><Link to='/busca-autores' className="navbar-links__ativo">Autores</Link></li>
                <li><Link to='/dica-especial' className="navbar-links__ativo">Dica especial</Link></li>
                </ul>
            </div>
        )

    }

}

export default Menu;
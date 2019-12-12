import React, { Fragment } from 'react';
import { getAutores } from '../../service/nytimes';
import Input from './components/Input';
import LivroAutores from './components/LivroAutores';
import Button from '../../components/Button';
import Header from '../../components/Header'
import './styles.css';

class Autores extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: "",
            autores: []
        }
    }

    inputValue = (param) => {
        this.setState({
            value: param.target.value
        })
    }

    handleSearch = () => {
        getAutores(this.state.value).then((response) => {
            this.setState({
                autores: response.data.results
            })
            console.log(response.data.results);

        }).catch(err => console.log(err))
    }

    render() {
        return (
            <Fragment>
                <Header
                    titulo="Busque seus autores favoritos"
                    classe="autores-header"
                />
                <div className="container autores">
                    <div className="divAutores">
                        <p className="textoIntro">Aqui você pode pesquisar por um autor ou autora e ler as resenhas publicadas pelo jornal <span className="nomeSite">The New York Times</span> a respeito dos seus livros.</p>
                    </div>
                    <div className="divSearch">
                        <Input
                            placeholder="Pesquise por um autor ou autora"
                            tipo="text"
                            getInputValue={this.inputValue}
                        />
                        <div className="divBtn">
                            <Button funcao={this.handleSearch}>
                                Pesquisar
                            </Button>
                        </div>
                    </div>
                    <div>
                        {this.state.autores.map((item, index) => {
                            return <LivroAutores key={index} {...item} />
                        })}
                    </div>
                </div>
            </Fragment>
        )
    }

}


export default Autores;
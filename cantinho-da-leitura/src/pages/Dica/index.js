import React from 'react';
import Header from '../../components/Header';
import Random from '../../assets/img/random.png';
import Button from '../../components/Button';
import LivroDica from './components/LivroDica';
import { getDicas } from '../../service/dicas';
import './styles.css';

class Dica extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            livros: [],
            imagem: Random,
            titulo: "Descubra o nome do seu próximo livro...",
            autor: "... e do próximo autor ou autora!"
        }
    }

    componentDidMount() {
        getDicas()
            .then(response => {
                this.setState({
                    livros: response.data
                })
            })
            .catch(error => {
                console.log(error)
            })
    }

    numeroAleatorio = () => {
        let numero = Math.floor(Math.random() * this.state.livros.length)
        console.log(numero);
        this.setState({
            imagem: this.state.livros[numero].imagem,
            titulo: this.state.livros[numero].titulo,
            autor: this.state.livros[numero].autor
        })
    }

    render() {
        return (
            <section>
                <Header
                    classe="dicas-header"
                    titulo="Quer uma dica de leitura?"
                />
                <div className="container">
                    <div className="divDica">
                        <p className="textoIntro">Está querendo ler um livro, mas não sabe qual escolher? Clique no botão abaixo para receber uma dica especial do <span className="nomeSite">Cantinho da Leitura</span>!</p>

                    </div>
                    <div className="divBotao">
                        <Button funcao={this.numeroAleatorio}>
                            Quero uma indicação!
                        </Button>
                        </div>
                    <LivroDica
                        titulo={this.state.titulo}
                        autor={this.state.autor}
                        imagem={this.state.imagem}
                    />
                </div>
            </section>
        )
    }
}

export default Dica;

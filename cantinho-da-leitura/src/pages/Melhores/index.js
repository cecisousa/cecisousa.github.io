import React, { Fragment } from 'react';
import Header from '../../components/Header';
import LivroMelhores from './components/LivroMelhores';
import Intro from '../../components/Intro'
import { getMelhores } from '../../service/nytimes';
import NYT from '../../assets/img/nyt.jpg';
import './styles.css'

class Melhores extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            livros: []
        }
    }

    componentDidMount() {
        getMelhores()
            .then(response => {
                this.setState({
                    livros: response.data.results.lists.map(item => {
                        return item.books
                    })
                })

            })

            .catch(error => {
                console.log(error);
            })
    }

    render() {
        return (
            <Fragment>
                <Header
                    titulo="Os melhores livros da semana"
                    classe="melhores-header"
                />
                <section className="container melhores">
                    <Intro
                        imagem={NYT}
                        alt="Capa do jornal impresso The New York Times"
                        paragrafo1={["O jornal ", <span key="indicadorMelhores" className='nomeSite'>The New York Times</span>, " é uma publicação norte-americana que circula diariamente desde 1851. Considerada uma referência no mundo do jornalismo, a publicação traz semanalmente uma lista dos livros que mais foram vendidos nos Estados Unidos."]}
                        paragrafo2='Esses "best-sellers" são originalmente agrupados em diversas categorias e, aqui, você tem acesso à lista completa: confira quais foram os 55 livros mais populares na última semana!'
                    />
                    <div>
                        {this.state.livros.length > 0
                            ? this.state.livros.map(item => {
                                return item.flatMap(livro => {
                                    return <div key={livro.primary_isbn13}>
                                        <LivroMelhores {...livro} />
                                    </div>
                                })
                            })
                            : <div className="divLoading">
                                <span className="loading">Carregando a lista de livros...</span>
                            </div>
                        }
                    </div>
                </section>
            </Fragment>
        )
    }
}

export default Melhores;

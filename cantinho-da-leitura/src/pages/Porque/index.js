import React from 'react';
import Header from '../../components/Header'
import Intro from '../../components/Intro'
import Quote from './components/Quote';
import Lista from './components/Lista';
import Dados from './components/Dados';
import Livros from '../../assets/img/page02-lateral.jpg'

import './styles.css'

const Porque = () => {
    return (
        <section>
            <Header
                classe="porque-header"
                titulo="Por que ler nos dias de hoje?"
            />
            <div className="container">
                <Intro
                    imagem={Livros}
                    alt="Pilha de livros sobre a mesa"
                    paragrafo1="O hábito de ler livros tem o poder de nos fazer muito bem! Tanto para quem busca uma forma de entretenimento quanto para quem quer adquirir novos conhecimentos, a leitura é uma das alternativas mais simples e democráticas."
                    paragrafo2={["Mesmo assim, a população mundial tem deixado esse costume de lado — seja pela correria do dia a dia, preguiça, falta de costume... O site ", <span key="indicadorPorque" className='nomeSite'>Cantinho da Leitura</span>, " tem como missão de incentivar as pessoas a desenvolverem o hábito de ler cada vez mais."]}
                />
                <Quote />
                <Lista />
                <Dados />
            </div>
        </section>
    )
}

export default Porque;

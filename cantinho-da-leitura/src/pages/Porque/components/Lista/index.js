import React from 'react';
import Estante from '../../../../assets/img/page02-estante.jpg'
import './styles.css'

const Lista = () => {
    return (
        <div className="secaoLista">
            <div>
                <img className="imagem" src={Estante} alt="Estante de livros ao lado de uma escada de madeira" />
            </div>
            <div className="lista">
                <h2 className="titulo">5 motivos para ler mais</h2>
                <ul>
                    <li className="item"><span className="detalheLista">Se você quer diminuir o estresse do dia a dia</span>, a leitura é uma das opções mais práticas para relaxar;</li>
                    <li className="item"><span className="detalheLista">Ler é um estimulante para o cérebro:</span> além de desenvolver a criatividade, é possível prevenir o Alzheimer e outros transtornos mentais;</li>
                    <li className="item"><span className="detalheLista">Novos conhecimentos são adquiridos</span> por meio dos livros, desde vocabulário até conhecimentos históricos e geográficos;</li>
                    <li className="item"><span className="detalheLista">Por meio da leitura, você desenvolve empatia</span> ao se colocar no lugar dos personagens e tentar compreendê-los;</li>
                    <li className="item"><span className="detalheLista">Dá para ler até mesmo de graça:</span> além de opções gratuitas na internet, vale descobrir onde fica a biblioteca mais próxima de você.</li>
                </ul>
            </div>

        </div>
    )
}

export default Lista;
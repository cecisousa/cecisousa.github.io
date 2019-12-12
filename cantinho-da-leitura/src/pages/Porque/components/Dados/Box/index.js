import React from 'react';
import './styles.css'

const Box = (props) => {
    return (
        <div className="box">
            <img className="imagemBox" src={props.src} alt={props.alt}/>
            <div className="content">
                <h3 className="tituloManchete">{props.titulo}</h3>
                <p className="nomeVeiculo">{props.veiculo}</p>
                <p className="descricaoNoticia">{props.descricao}</p>
                <a className="botaoNoticia" href={props.link} target="_blank" rel="noopener noreferrer">Leia mais!</a>
            </div>
        </div>
    )
}

export default Box;
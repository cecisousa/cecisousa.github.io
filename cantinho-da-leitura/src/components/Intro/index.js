import React from 'react';
import './styles.css'

const Intro = (props) => {
    return (
        <div className="intro">
            <img className="imagemIntro" src={props.imagem} alt={props.alt} />
            <div className="divIntro">
                <p className="textoIntro">{props.paragrafo1}</p>
                <p className="textoIntro">{props.paragrafo2}</p>
            </div>
        </div>
    )
}

export default Intro;

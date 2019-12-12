import React from 'react';
import './styles.css';

const LivroAutores = (props) => {
    let dataAtual = props.publication_dt.split("-")
    let novaData = `${dataAtual[2]}/${dataAtual[1]}/${dataAtual[0]}`
    return (
        <div className="autoresText">
            <h3 className="autoresTitulo">{props.book_title}</h3>
            <p className="autoresAutor">{props.book_author}</p>
            <p className="autoresData">{novaData}</p>
            <div className="divBtn">
                <a className="botaoAutor" href={props.url} target="_blank" rel="noopener noreferrer">Ler a crítica</a>
            </div>
        </div>
    );
}
export default LivroAutores;
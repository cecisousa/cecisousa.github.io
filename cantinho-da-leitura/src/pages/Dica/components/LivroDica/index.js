import React from 'react'
import './styles.css'

function LivroDica(props) {
  return (
    <div className="divContentDica">
      <img className="imagemLivroDica" src={props.imagem} alt="Crédito da imagem: site da Amazon" />
      <div className="divContentText">
        <h3 className="tituloDica">{props.titulo}</h3>
        <p className="autorDica">{props.autor}</p>
      </div>
    </div>
  )
}

export default LivroDica;
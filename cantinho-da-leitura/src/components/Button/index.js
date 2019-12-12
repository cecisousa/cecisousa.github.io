import React from 'react'
import './styles.css'

const Button = (props) => {
    const { funcao, children } = props;
    
    return(
        <button className="button" onClick={funcao}>{children}</button>
    )
}

export default Button;

import React from 'react';
import { Link } from 'react-router-dom';
import './card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'


const Card = props => {
    return (

        <div className='box'>
            <div className='text'>{props.nome}</div>
            <Link to={`/Biografia/${props.id}`}>
                <img src={props.foto} alt={props.nome} />
            </Link>
            <div className='icon' id='icon' >
                <i><FontAwesomeIcon icon={faStar} size="sm" onClick={() => props.favoritar(props.id)} /></i>
            </div>
        </div>


    )
}
export default Card;
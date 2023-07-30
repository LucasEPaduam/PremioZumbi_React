import React, { useContext, useState, useEffect } from "react";
import { CardContext } from "../context/cardProvider";
import './honored.css';
import Card from './card'
import './card.css'

import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { AuthContext } from "../context/authProvider";
import { db } from '../firebaseConfig';
import { getDoc, doc, setDoc } from "firebase/firestore";



const Favoritos = props => {

    const { cards } = useContext(CardContext);
    const [searchTerm, setSearchTerm] = useState('');
    const { User } = useContext(AuthContext);
    const [favoritos, setFavoritos] = useState([]);


    return (

        <section className='services' id='services'>
            <div className='max-width'>
                <div className='search__container'>
                    <div className='search__input'>
                        <a href='' target='_blank' hidden></a>
                        <input type='text' placeholder='Busque pelo nome...' id='search' />
                        <div className='autocomplete__box'>

                        </div>
                    </div>
                    <div className='search__icon' id='icon' >
                        <i><FontAwesomeIcon icon={faSearch} size="xl" /></i>
                    </div>
                </div>
                <h2 className='title-right'>Favoritos</h2>
                <div className="serv-content">
                    {cards.map((card) => {
                        return (
                            <div className="card" key={card.id}>
                                <Card id={card.id} nome={card.nome} foto={card.foto} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>



    )
}
export default Favoritos;
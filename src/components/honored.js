import React, { useContext, useState, useEffect } from "react";
import { CardContext } from "../context/cardProvider";
import './honored.css';
import Card from './card'
import './card.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { AuthContext } from "../context/authProvider";
import { db } from '../firebaseConfig';
import { getDoc, doc, setDoc, updateDoc, arrayUnion } from "firebase/firestore";

const Honored = (props) => {

    const { cards } = useContext(CardContext);
    const { User } = useContext(AuthContext);
    const [searchValue, setSearchValue] = useState("");
    const [filteredCards, setFilteredCards] = useState([]);
    const [favoritos, setFavoritos] = useState([]);


    const favoritar = async (cardId) => {

        if (!User) {
            alert("Usuário deve estar logado para favoritar um card! \nFaça sua autenticação na aba Login.")
        } else {

            const userId = User.uid;
            let userData;

            try {
                const docRef = doc(db, 'users', userId);
                const docSnap = await getDoc(docRef);
                userData = docSnap.data();
                console.log("Aqui doc snap" + userData);
            } catch (error) {
                console.log('Erro ao buscar dados do Card', error);
            }

            //favoritos.push(user);
            userData.favoritos.push(cardId);

            try {
                await setDoc(doc(db, "users", userId),
                    userData
                );

            } catch (error) {
                console.log(error);
            }
            console.log("Homenageados userID " + userId);
        };
    }

    const filterCards = () => {

        const filtered = cards.filter((card) =>
            card.nome.toLowerCase().startsWith(searchValue.toLowerCase())
        );
        setFilteredCards(filtered);

    };

    useEffect(() => {
        filterCards();
    }, [searchValue, cards]);


    return (

        <section className='services' id='services'>
            <div className='max-width'>
                <div className='search__container'>
                    <div className='search__input'>
                        <a href='' target='_blank' hidden></a>
                        <input type='text' placeholder='Busque pelo nome...' id='search'
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)} />
                    </div>
                    <div className='search__icon' id='icon' >
                        <i><FontAwesomeIcon icon={faSearch} size="xl" /></i>
                    </div>
                </div>
                <h2 className='title-right'>Homenageados</h2>
                <div className="serv-content">
                    {filteredCards.map((card) => {
                        return (
                            <div className="card" key={card.id}>
                                <Card id={card.id} nome={card.nome} foto={card.foto} favoritar={favoritar} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>



    )
}
export default Honored;
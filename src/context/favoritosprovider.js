import React, { useState, useEffect } from 'react';
import { collection, addDoc, getDocs, doc, deleteDoc, updateDoc, setDoc, getDoc, query, where, } from 'firebase/firestore';
import { db } from '../firebaseConfig';

export const FavoritosContext = React.createContext();

const FavoritosProvider = (props) => {
    const [favoritos, setFavoritos] = useState([]);

    const fetchCards = async () => {
        const favoritosAux = [];
        try {
            const querySnapshot = await getDocs(collection(db, 'cardHomenageados'));
            querySnapshot.forEach((doc) => {
                console.log(`${doc.id} => ${doc.data()}`);
                cardsAux.push({ id: doc.id, ...doc.data() });

            });

            setCards(cardsAux);
            console.log(cardsAux);
        } catch (error) {
            console.error('Error fetching collection: ', error);
        }
    };

    useEffect(() => {
        fetchCards();
    }, []);

    return (
        <CardContext.Provider value={{ cards: cards }}>
            {props.children}
        </CardContext.Provider>
    );
};

export default FavoritosProvider;

import React, { useState, useEffect } from 'react';
import { collection, addDoc, getDocs, doc, deleteDoc, updateDoc, setDoc, getDoc, query, where, } from 'firebase/firestore';
import { db } from '../firebaseConfig';

export const CardContext = React.createContext();

const CardProvider = (props) => {
    const [cards, setCards] = useState([]);

    const fetchCards = async () => {
        const cardsAux = [];
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

export default CardProvider;

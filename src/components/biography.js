import React, { useState, useEffect } from "react";
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import { useParams, Link } from 'react-router-dom';

import './biography.css';

const Biography = (props) => {

    const [cardData, setCardData] = useState(null);
    const { id } = useParams();

    useEffect(() => {

        const fetchCardData = async () => {

            try {

                const docRef = doc(db, 'cardHomenageados', id);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setCardData(docSnap.data());
                }
                else {
                    console.log('Documento não encontrado!');
                }

            } catch (error) {
                console.log('Erro ao buscar dados do Card', error);
            }

        };

        fetchCardData();
    }, [id]);

    if (!cardData) {
        return <p>Carregando....</p>
    }


    return (

        <section className="historia" id="Historia">
            <div className="max-width">
                <div className="historia-content">
                    <div className="column left">
                        <Link to="/Homenageados">
                            <div><span>Voltar</span></div>
                        </Link>
                        <h2 className="title-homenageados">{cardData.nome}</h2>
                        <div>
                            <p>Nascimento: {cardData.nascimento}</p>
                            <p>{cardData.falecimento}</p>
                        </div>
                        <img src={cardData.foto} alt={cardData.nome} />
                    </div>
                    <div className="column right">
                        <div className="text">{cardData.tituloBiografia}</div>
                        <p>{cardData.biografiaP1}</p>
                        <p>{cardData.biografiaP2}</p>
                        <p>{cardData.biografiaP3}</p>
                        <p>{cardData.biografiaP4}</p>
                        <p>{cardData.biografiaP5}</p>
                        <p>{cardData.biografiaP6}</p>
                        <a href={cardData.linkExterno} target="_blank" rel="noopener noreferrer">Saiba Mais +</a>
                    </div>
                </div>
            </div>
        </section>
    );

};
export default Biography;
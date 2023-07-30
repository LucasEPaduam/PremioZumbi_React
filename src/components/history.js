
import React from "react";
import './history.css';
import Medalha from '../imagens/Medalha-Zumbi-dos-Palmares-752x499.jpg';


const History = props => {

    return (

        <section className='historia' id='Historia'>
            <div className='max-width'>
                <div className='historia-content'>
                    <div className='column left'>
                        <h2 className='title-homenageados'>História</h2>
                        <img src={Medalha} alt='medalha zumbi' />
                    </div>
                    <div className='column right'>
                        <div className='text'>O Prêmio Zumbi dos Palmares</div>
                        <p> Foi criado em 1997 pelo Conselho Municipal de Participação e Desenvolvimento da Comunidade Negra
                            de São Paulo, com o objetivo de homenagear pessoas, grupos e instituições que se destacam na
                            promoção da igualdade racial.</p>
                        <p>A iniciativa foi adotada por outras cidades e estados brasileiros, e em 2003, com a aprovação da
                            Lei nº 10.639, o Prêmio Zumbi dos Palmares passou a ser institucionalizado em âmbito nacional
                            como um dos instrumentos de valorização da cultura afro-brasileira e de promoção da igualdade
                            racial.</p>
                        <p>A homenagem recebeu o nome de Zumbi dos Palmares em referência ao líder do quilombo dos Palmares,
                            que foi um dos principais símbolos da resistência negra à escravidão no Brasil. Zumbi liderou a
                            luta contra a escravidão e a opressão dos colonizadores portugueses na região onde hoje é o
                            estado de Alagoas, no nordeste do Brasil, no final do século XVII.</p>
                        <p>A criação do Prêmio Zumbi dos Palmares foi uma forma de reconhecer e valorizar a luta dos negros
                            e negras brasileiros na busca pela igualdade racial e contra o racismo, em um país que tem uma
                            história de exclusão e violência contra a população negra.
                        </p>
                        <p>Desde então, a homenagem vem sendo concedida anualmente pelo governo brasileiro e por alguns
                            governos municipais, como forma de reconhecer o trabalho e a luta de personalidades negras que
                            têm se destacado na promoção da igualdade racial e na defesa dos direitos humanos no Brasil.</p>
                        <a href='http://www.planalto.gov.br/ccivil_03/leis/2003/L10.639.htm'>Lei nº 10.639</a>
                    </div>
                </div>
            </div>
        </section>



    )
}
export default History;





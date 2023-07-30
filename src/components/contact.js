
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeAfrica, faHome, faLinkSlash, faUserAstronaut } from '@fortawesome/free-solid-svg-icons'



import './contact.css';


const Contact = props => {

    return (

        <section className='contato' id='contato'>
            <div className='max-width'>
                <div className='contato-content'>
                    <form className='form-container' id='contact-form'>
                        <label for='name'>Nome:</label>
                        <input type='text' id='name' name='name' required /><br /><br />
                        <label for='email'>E-mail:</label>
                        <input type='email' id='email' name='email' required /><br /><br />
                        <label for='message'>Mensagem:</label>
                        <textarea id='message' name='message' required></textarea><br /><br />
                        <button type='submit'>Enviar</button>
                    </form>
                    <div className='contato-card'>
                        <div className='icons'>
                            <div className='row'>
                                <i><FontAwesomeIcon icon={faUserAstronaut} size="xl" /></i>
                                <div className='info'>
                                    <div className='sub-title'>(19)99999-9999</div>
                                </div>
                            </div>
                            <div className="row">
                                <i><FontAwesomeIcon icon={faLinkSlash} /></i>
                                <div class="info">
                                    <div><a
                                        href="https://www.linkedin.com/company/faculdade-zumbi-dos-palmares/?originalSubdomain=br">Universidade
                                        ZP</a>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <i><FontAwesomeIcon icon={faHome} /></i>
                                <div class="info">
                                    <div><a href="https://twitter.com/FaculdadeZumbi">@FaculdadeZumbi
                                    </a>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <i><FontAwesomeIcon icon={faGlobeAfrica} /></i>
                                <div class="info">
                                    <div class="sub-title">zumbi@gmail.com</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    )
}
export default Contact;





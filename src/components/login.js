import React, { useState, useContext } from "react";
import { auth } from '../firebaseConfig';
import { signInWithEmailAndPassword } from "firebase/auth";
import { AuthContext } from "../context/authProvider";

import './login.css';


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const AuthCtx = useContext(AuthContext);

    const autenticar = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                //console.log(userCredential);
                AuthCtx.setUser(userCredential.user);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    console.log(AuthCtx.User);
    return (

        <section className='login' id='login' >
            <div className='max-width'>
                <div className='login-content'>
                    <form className='form-container' id='login-form' onSubmit={autenticar}>
                        <input type='email' id='email' name='email' placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required /><br /><br />
                        <input type='text' id='senha' name='senha' placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} required /><br /><br />
                        <button type='submit'>Autenticar</button>
                        {AuthCtx.User && <p>Autenticação ok. Você está logado!</p>} {!AuthCtx.User && <p className="naoautenticado">Usuário não autenticado.</p>}
                    </form>

                </div>
            </div>
        </section>


    )
}
export default Login;

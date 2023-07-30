import React, { useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { AuthContext } from "../context/authProvider";


import './header.css';

import { NavLink } from 'react-router-dom';

const Header = props => {

    const { User } = useContext(AuthContext);



    return (

        <nav className='navbar'>
            <div className='max-width'>
                <div className='logo'><NavLink to='/'>Prêmio Zumbi dos <span>Palmares</span></NavLink></div>
                <ul className='menu'>
                    <li><NavLink to='/' className='menu-btn'><span>Home</span></NavLink></li>
                    <li><NavLink to='/Historia' className='menu-btn'><span>História</span></NavLink></li>
                    <li><NavLink to='/Homenageados' className='menu-btn'><span>Homenageados</span></NavLink></li>
                    {User && <li><NavLink to='/Favoritos' className='menu-btn'><span>Favoritos</span></NavLink></li>}
                    <li><NavLink to='/Contato' className='menu-btn'><span>Contato</span></NavLink></li>
                    <li><NavLink to='/Login' className='menu-btn'><span>Login</span></NavLink></li>
                </ul>
            </div>
        </nav>


    )
}
export default Header;
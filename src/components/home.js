import React, { Component } from "react";
import Slider from 'react-slick';

import './home.css';

import Luana from '../imagens/Luana-3_CMYK-1024x608.jpg';

const Home = props => {

    return (

        <section className='home' id='home'>
            <div className='max-width'>
                <Slider>
                    <div className='carousel owl-carousel'>
                        <div className='card'>
                            <div className='box'>
                                <a href='LuanaGenot.html'><img src={Luana} title='Luana Génot'
                                    alt='luana' /></a>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </section>



    )
}
export default Home;
import React from 'react';
import { Link } from 'react-router-dom';

import About from './About';

function Home() {

    return (
        <div className='big-container'>
            <div className='icon-container'>
                <a href="https://gooddogdraws.com/" target="_blank"><img className='website-icon icon' src={require('../assets/website-icon.png')} alt='website-icon' /></a>
                <Link to='/work'><a href='/' target='_blank'><img className='graphic-design-icon icon' src={require('../assets/graphic-design-icon.png')} alt='website-icon' /></a></Link>
                <Link to='/about'><a href='/' target='_blank'><img className='about-me-icon icon' src={require('../assets/about-me-icon.png')} alt='website-icon' /></a></Link>
                <a href='/' ><img className='writing-icon icon' src={require('../assets/writing-icon.png')} alt='website-icon' /></a>
            </div>
            <div className='title-container'><img className="title-icon" src={require('../assets/title-icon.png')} alt="title-icon" /></div>

        </div>

    );

}

export default Home;
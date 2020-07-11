import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='big-container'>
        <div className='top-container'>
          <img className='website-icon icon' src={require('./assets/website-icon.png')} alt='website-icon' />
          <img className='graphic-design-icon icon' src={require('./assets/graphic-design-icon.png')} alt='website-icon' />
          <img className='about-me-icon icon' src={require('./assets/about-me-icon.png')} alt='website-icon' />
          <img className='writing-icon icon' src={require('./assets/writing-icon.png')} alt='website-icon' />
        </div>
        <div className='title-container'><img className="title-icon" src={require('./assets/title-icon.png')} alt="title-icon" /></div>
      </div>
    </div>
  );
}

export default App;

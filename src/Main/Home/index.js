import React, { useEffect } from 'react';
import HeaderBar from './HeaderBar';
import Video from './Video';
import Intro from './Intro';
import './index.css';

const Home = () => {
  useEffect(() => {
    let lastScrollTop = 0;
    let navbar = window.document.querySelector('.header-bar-container');
    window.addEventListener('scroll', () => {
      let scrollTop = window.pageYOffset;
      if (scrollTop === 0) {
        navbar.style.backgroundColor = 'transparent';
        navbar.style.color = 'whitesmoke';
      } else {
        navbar.style.backgroundColor = 'whitesmoke';
        navbar.style.color = 'black';
      }
      lastScrollTop = scrollTop;
    });
  }, []);

  return (
    <div id='home' className='home-container'>
      <div className='video-container'>
        <HeaderBar />
        <Video />
        <Intro />
      </div>
    </div>
  );
};

export default Home;

import React, { useEffect } from 'react';
import NavBar from './components/NavBar';
import Video from './components/Video';
import Intro from './components/Intro';
import './Home.css';

const Home = () => {
  useEffect(() => {
    let lastScrollTop = 0;
    let navbar = window.document.querySelector('.home-navbar');
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
    <div id='focus-home' className='home'>
      <NavBar />
      <Video />
      <Intro />
    </div>
  );
};

export default Home;

import React, { useEffect } from 'react';
import '../page.css';
import '../../../Home/Home.css';

const ProjectNavBar = ({ history, more }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [more]);

  useEffect(() => {
    let navbar = window.document.querySelector('.project-navbar');
    window.addEventListener('scroll', () => {
      let scrollTop = window.pageYOffset;
      if (scrollTop === 0) {
        navbar.style.backgroundColor = 'transparent';
        navbar.style.color = 'whitesmoke';
      } else {
        navbar.style.backgroundColor = '#202a45';
      }
    });
  }, []);

  return (
    <div className='project-navbar home-navbar'>
      <div className='project-navbar-item' onClick={() => history.push('/')}>
        HOME
      </div>

      <div
        className='project-navbar-item'
        onClick={() => window.open(more, '_blank')}
      >
        프로젝트 더보기→
      </div>
    </div>
  );
};

export default ProjectNavBar;

import SFCINEMA_web from '../../../../gallery/SFCINEMA(Web).png';
import SFCINEMA_app from '../../../../gallery/SFCINEMA(RN).png';
import React, { useEffect } from 'react';
import ScreenImage from './ScreenImage';
import ProjectContents from './ProjectContents';

const personalProject = [
  {
    name: 'SF CINEMA [Web]',
    kind: 'web',
    img: SFCINEMA_web,
    unit: 'Personal Project / Full-Stack',
    path: 'sfcinema-web',
  },
  {
    name: 'SF CINEMA [App]',
    kind: 'app',
    img: SFCINEMA_app,
    unit: 'Personal Project / Full-Stack',
    path: 'sfcinema-app',
  },
];

const PersonalProject = ({ history, observeFunc }) => {
  useEffect(() => {
    const observer = window.document.querySelector('.projects-personal');

    observeFunc(observer).observe(observer);
  });

  return (
    <div className='projects-personal'>
      {personalProject.map((project, i) => (
        <div className='projects-project' key={i}>
          <ScreenImage kind={project.kind} img={project.img} />
          <ProjectContents
            name={project.name}
            unit={project.unit}
            path={project.path}
            history={history}
          />
        </div>
      ))}
    </div>
  );
};

export default PersonalProject;

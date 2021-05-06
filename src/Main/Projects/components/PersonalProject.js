import React, { useEffect } from 'react';
import ScreenImage from './ScreenImage';
import ProjectContents from './ProjectContents';

const personalProject = [
  {
    name: 'SF CINEMA [Web]',
    kind: 'web',
    img:
      'https://kimdonghyun-portfolio-image.s3.ap-northeast-2.amazonaws.com/SFCINEMA(Web).png',
    unit: 'Personal Project / Full-Stack',
    path: 'sf-cinema-web',
  },
  {
    name: 'SF CINEMA [App]',
    kind: 'app',
    img:
      'https://kimdonghyun-portfolio-image.s3.ap-northeast-2.amazonaws.com/SFCINEMA(RN).png',
    unit: 'Personal Project / Full-Stack',
    path: 'sf-cinema-app',
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

import yourtube from '../../../../gallery/yourtube.png';
import meetyou from '../../../../gallery/meet-you.png';
import React, { useEffect } from 'react';
import ScreenImage from './ScreenImage';
import ProjectContents from './ProjectContents';

const teamProject = [
  {
    name: 'YourTube [Web]',
    kind: 'web',
    img: yourtube,
    unit: 'Team Project / Front-End',
    path: 'your-tube',
  },
  {
    name: 'Meet-you [App]',
    kind: 'app',
    img: meetyou,
    unit: 'Team Project / Back-End',
    path: 'meet-you',
  },
];

const TeamProject = ({ history, observeFunc }) => {
  useEffect(() => {
    const observer = window.document.querySelector('.projects-team');
    observeFunc(observer).observe(observer);
  });

  return (
    <div className='projects-team'>
      {teamProject.map((project, i) => (
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

export default TeamProject;

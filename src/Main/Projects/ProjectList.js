import { useEffect } from 'react';
import ProjectImage from './ProjectImage';
import ProjectContents from './ProjectContents';

const projectList = {
  team_project: [
    {
      name: 'YourTube [Web]',
      kind: 'web',
      img:
        'https://kimdonghyun-portfolio-image.s3.ap-northeast-2.amazonaws.com/yourtube.png',
      unit: 'Team Project / Front-End',
      path: 'your-tube',
    },
    {
      name: 'Meet-you [App]',
      kind: 'app',
      img:
        'https://kimdonghyun-portfolio-image.s3.ap-northeast-2.amazonaws.com/Meet-you.png',
      unit: 'Team Project / Back-End',
      path: 'meet-you',
    },
  ],
  personal_project: [
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
  ],
};

const observeFunc = (projectsList) => {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(
      (entry) => {
        if (entry.isIntersecting) {
          projectsList.style.opacity = 1;
          projectsList.style.transition = 'all 1s';
          projectsList.style.transform = 'translateY(-50px)';

          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );
  });
  return observer;
};

const ProjectList = ({ history }) => {
  useEffect(() => {
    const team_project_observer = window.document.querySelector(
      '.projects_list_team-project'
    );
    const personal_project_observer = window.document.querySelector(
      '.projects_list_personal-project'
    );

    observeFunc(team_project_observer).observe(team_project_observer);
    observeFunc(personal_project_observer).observe(personal_project_observer);
  });

  return (
    <div className='projects_list'>
      <div className='projects_list_team-project'>
        {projectList.team_project.map((project, i) => (
          <div className='projects_list_project' key={i}>
            <ProjectImage kind={project.kind} img={project.img} />
            <ProjectContents
              name={project.name}
              unit={project.unit}
              path={project.path}
              history={history}
            />
          </div>
        ))}
      </div>
      <div className='projects_list_personal-project'>
        {projectList.personal_project.map((project, i) => (
          <div className='projects_list_project' key={i}>
            <ProjectImage kind={project.kind} img={project.img} />
            <ProjectContents
              name={project.name}
              unit={project.unit}
              path={project.path}
              history={history}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;

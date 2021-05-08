import { withRouter } from 'react-router-dom';
import ProjectsTitle from './components/ProjectsTitle';
import TeamProject from './components/TeamProject';
import PersonalProject from './components/PersonalProject';
import './Projects.css';

const Projects = ({ history }) => {
  const observeFunc = (project) => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(
        (entry) => {
          if (entry.isIntersecting) {
            project.style.opacity = 1;
            project.style.transition = 'all 1s';
            project.style.transform = 'translateY(-50px)';

            observer.unobserve(entry.target);
          }
        },
        { threshold: 0.5 }
      );
    });
    return observer;
  };

  return (
    <div id='focus-projects' className='projects'>
      <ProjectsTitle />
      <TeamProject history={history} observeFunc={observeFunc} />
      <PersonalProject history={history} observeFunc={observeFunc} />
    </div>
  );
};

export default withRouter(Projects);

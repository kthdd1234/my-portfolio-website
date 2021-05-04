import { withRouter } from 'react-router-dom';
import ProjectsHead from './ProjectsHead';
import ProjectList from './ProjectList';
import './index.css';

const Projects = ({ history }) => {
  return (
    <div id='projects' className='projects_container'>
      <ProjectsHead />
      <ProjectList history={history} />
    </div>
  );
};

export default withRouter(Projects);

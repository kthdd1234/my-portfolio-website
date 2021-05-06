import { Button } from 'antd';

const ProjectContents = ({ name, unit, path, history }) => {
  return (
    <div className='projects-project-contents'>
      <div className='projects-project-contents-name'>{name}</div>
      <div className='projects-project-contents-pos'>{unit}</div>
      <Button
        style={{
          color: '#1890ff',
          fontWeight: 'bold',
          borderRadius: 5,
        }}
        type='primary'
        size='large'
        ghost={true}
        onClick={() => history.push(`/projects/${path}`)}
      >
        프로젝트 보기 →
      </Button>
    </div>
  );
};

export default ProjectContents;

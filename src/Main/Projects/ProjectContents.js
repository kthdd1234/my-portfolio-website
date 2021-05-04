import { Button } from 'antd';

const ProjectContents = ({ name, unit, path, history }) => {
  return (
    <div className='projects_list_project_contents'>
      <div className='projects_list_project_contents_name'>{name}</div>

      <div className='projects_list_project_contents_pos'>{unit}</div>
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

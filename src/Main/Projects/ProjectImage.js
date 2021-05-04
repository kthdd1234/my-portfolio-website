const ProjectImage = ({ kind, img }) => {
  return (
    <div className={`projects_list_project_${kind}_wrap`}>
      <img className='projects_list_project_wrap_img' src={img} alt='img' />
    </div>
  );
};

export default ProjectImage;

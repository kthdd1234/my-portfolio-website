import '../page.css';

const ProjectGIF = ({ GIF, more }) => {
  return (
    <div
      className='project-gif'
      style={{
        backgroundColor: GIF.backgroundColor,
      }}
    >
      <span className='project-gif-title'>{GIF.title}</span>
      <div className='project-gif-wrap'>
        <img
          className='project-gif-wrap-img'
          src={GIF.gif}
          alt='img'
          style={{ width: GIF.width }}
        />
      </div>
    </div>
  );
};

export default ProjectGIF;

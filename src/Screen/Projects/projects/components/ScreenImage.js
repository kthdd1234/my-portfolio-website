const ScreenImage = ({ kind, img }) => {
  return (
    <div className={`projects-project-${kind}`}>
      <img className='projects-project-img' src={img} alt='img' />
    </div>
  );
};

export default ScreenImage;

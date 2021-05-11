import Sea from '../../../gallery/Sea.mp4';

const Video = () => {
  return (
    <video className='home-video' muted autoPlay loop>
      <source src={Sea} type='video/mp4' />
    </video>
  );
};

export default Video;

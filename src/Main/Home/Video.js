const Video = () => {
  return (
    <video className='video-mp4' muted autoPlay loop>
      <source
        src='https://kimdonghyun-portfolio-image.s3.ap-northeast-2.amazonaws.com/Sea.mp4'
        type='video/mp4'
      />
    </video>
  );
};

export default Video;

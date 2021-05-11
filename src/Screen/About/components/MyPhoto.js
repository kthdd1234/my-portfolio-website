import my_photo from '../../../gallery/my-photo.jpg';

const MyPhoto = () => {
  return (
    <div className='about-photo'>
      <img src={my_photo} className='about-photo-img' alt='img' />
    </div>
  );
};

export default MyPhoto;

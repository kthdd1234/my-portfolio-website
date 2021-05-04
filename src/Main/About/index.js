import AboutMe from './AboutMe';
import MyPhoto from './MyPhoto';
import './index.css';

const About = () => {
  return (
    <div id='about' className='about-container'>
      <div className='about-wrap'>
        <AboutMe />
        <MyPhoto />
      </div>
    </div>
  );
};

export default About;

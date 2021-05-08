import AboutMe from './components/AboutMe';
import MyPhoto from './components/MyPhoto';
import './About.css';

const About = () => {
  return (
    <div id='focus-about' className='about'>
      <AboutMe />
      <MyPhoto />
    </div>
  );
};

export default About;
